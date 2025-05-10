import React, { createContext, useEffect, useState} from 'react';
import app from '../firebase/firebase-init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)

  console.log(user)

//  create  user with email and password 
  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)

  }

  // on Auth changed 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)  => {
      setUser(currentUser);
    })
    return () =>{
      unsubscribe();
    }

  },[])


  const authData ={
    user,
    setUser,
    createUser
  } 
  return <AuthContext value={authData}>{children}</AuthContext>
};
 
export default AuthProvider;