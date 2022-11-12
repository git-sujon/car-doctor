import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import app from '../../Firebase/Firebase.config';



export const AuthContext = createContext()
const auth= getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading , setLoading ] =useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIN =( email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const signInWithProvider =(provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('CarDoctorToken')
        return signOut(auth)
    }


    useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,curentUser => {
            setUser(curentUser)
            console.log(curentUser)
            setLoading(false)
        })

    return ()=> {
        unSubscribe()
    }

    }, [])


    const authInfo= {
        user,
        loading,
        setLoading,
        createUser,
        userLogIN,
        signInWithProvider,
        logOut,
        signInWithProvider
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;