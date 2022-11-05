import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth"
import app from '../../Firebase/Firebase';
 
 const auth=getAuth(app)
 const useFirebase = () => {
   const [user,setuser]=useState([])
    function gogolesignIn(){
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth,googleprovider)
        .then(result=>{
            const user=result.user
            setuser(user)
        }).catch(err=>{
            console.log(err.message)
        })

    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setuser(user)
        })
    },[])
    function signout(){
        signOut(auth).then(()=>{
            setuser([])
        })
    }
    console.log(user)
    return {
        user,
        gogolesignIn,
        signout
    }
 };
 
 export default useFirebase;