
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/firebase';

export interface AuthUser extends User {
  role: 'user' | 'premium' | 'owner';
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
        let userRole: 'user' | 'premium' | 'owner' = 'user';

        if (userDoc.exists()) {
          userRole = userDoc.data()?.role || 'user';
        } else {
          userRole = firebaseUser.email === 'rsah0123456@gmail.com' ? 'owner' : 'user';
          const newUser = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role: userRole,
            createdAt: new Date(),
          };
          await setDoc(userDocRef, newUser);
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
    return setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      role: role,
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
