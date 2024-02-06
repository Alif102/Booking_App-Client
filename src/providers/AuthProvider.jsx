/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
// import axios from 'axios';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { clearCookie } from "../api/Auth";
import auth from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
 

    // Google LogIn
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // Sign in
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const LogOut = async () => {
        setLoading(true)
        await clearCookie();
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=> {
        const unSubscribe =onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return ()=> {
            return unSubscribe();
        }
    },[])


    const authentications = {
        signInWithGoogle,
      createUser,
        user,
        loading,
        signIn,
        LogOut,
        updateUserProfile
    }



  return (
    <AuthContext.Provider value={authentications}>
        {children}

    </AuthContext.Provider>
  )
}
 
export default AuthProvider