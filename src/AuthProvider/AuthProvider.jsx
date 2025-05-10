import React, { createContext, useEffect, useState} from 'react';
import app from '../firebase/firebase-init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true);

  // console.log(loading,user)

//  create  user with email and password 
  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)

  }

  // sign in 
  const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  // log out functionality 

   const logOut = () => {
    return signOut(auth);
   }

  // on Auth changed 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)  => {
      setUser(currentUser);
      setLoading(false);
    })
    return () =>{
      unsubscribe();
    }

  },[])


  const authData ={
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading
  } 
  return <AuthContext value={authData}>{children}</AuthContext>
};
 
export default AuthProvider;