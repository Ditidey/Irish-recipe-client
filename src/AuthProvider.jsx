import React, { useEffect, useState } from 'react';
 import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { createContext } from 'react';
import { app } from './firebase/firebase.config';

export const contextProvider = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {    
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);

    const registerUser = ()=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser =()=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)
        });
        return ()=>{unsubscribe}
    },[])
    const authInfo = {
            user,
            loading,
            registerUser,
            loginUser,
            logoutUser,
    }
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;