import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthProvider = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [lodaing, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    }

    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // setLoading(false);
        })
        return () => unsubscribe;
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        logout,
        // lodaing,
    }
    return (
        <div>
            <AuthProvider.Provider value={authInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;