
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/firebase';

export interface AuthUser extends User {
  role: 'user' | 'premium' | 'owner';
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => { throw new Error('Login function not implemented'); },
  signup: async () => { throw new Error('Signup function not implemented'); },
  logout: async () => { throw new Error('Logout function not implemented'); },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const userDoc = await getDoc(userDocRef);
        let userRole: 'user' | 'premium' | 'owner' = 'user';

        if (userDoc.exists()) {
          userRole = userDoc.data()?.role || 'user';
        } else {
          // This case handles users who signed up before the role system was in place
          // or if the doc creation failed.
          userRole = firebaseUser.email === 'rsah0123456@gmail.com' ? 'owner' : 'user';
          await setDoc(userDocRef, {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role: userRole,
            createdAt: new Date(),
          }, { merge: true });
        }
        setUser({ ...firebaseUser, role: userRole });
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
    const userDocRef = doc(db, 'users', user.uid);
    const role = email === 'rsah0123456@gmail.com' ? 'owner' : 'user';
    await setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      role: role,
      createdAt: new Date(),
    });
    // Return the full userCredential, as expected by the calling component
    return userCredential;
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
