
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/firebase';
import { usePathname, useRouter } from 'next/navigation';

export interface AuthUser extends User {
  role?: 'user' | 'premium';
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({ ...firebaseUser, role: userData.role || 'user' });
        } else {
          // This case might happen if user exists in auth but not firestore
          // We can assign a default role
           const newUser = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role: 'user',
            createdAt: new Date(),
          };
          await setDoc(userDocRef, newUser);
          setUser({ ...firebaseUser, role: 'user' });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Create a user document in Firestore
    const userDocRef = doc(db, 'users', user.uid);
    return setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      role: 'user', // Default role
      createdAt: new Date(),
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = { user, loading, login, signup, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export function withPublic(Component: React.ComponentType<any>) {
  return function WithPublic(props: any) {
    return <Component {...props} />;
  };
}

export function withProtected(Component: React.ComponentType<any>, requiredRole: 'user' | 'premium' = 'user') {
    return function WithProtected(props: any) {
        const { user, loading } = useAuth();
        const router = useRouter();
        const pathname = usePathname();

        useEffect(() => {
            if (!loading && !user) {
                router.push('/premium?from=' + pathname); // Redirect to premium if not logged in
            }
        }, [user, loading, router, pathname]);

        useEffect(() => {
            if (!loading && user) {
                if (requiredRole === 'premium' && user.role !== 'premium') {
                    router.push('/premium?from=' + pathname); // Redirect if not premium
                }
            }
        }, [user, loading, router, requiredRole, pathname]);


        if (loading || !user || (requiredRole === 'premium' && user.role !== 'premium')) {
            // You can show a loading spinner or a placeholder here
            return (
                <div className="flex justify-center items-center h-screen">
                    <p>Loading...</p>
                </div>
            );
        }

        return <Component {...props} />;
    };
}
