import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.config';



export const AuthContext = createContext()
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading , setLoading ] =useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIN =( email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const signInWithProvider =(provider) => {
        return signInWithPopup(auth, provider)
    }


    useEffect(()=>{
    const unSubscribe=        onAuthStateChanged(auth,curentUser => {
            setUser(curentUser)
        })

    return ()=> {
        unSubscribe()
    }

    }, [])


    const authInfo= {
        user,
        loading,
        createUser,
        userLogIN,
        signInWithProvider,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;