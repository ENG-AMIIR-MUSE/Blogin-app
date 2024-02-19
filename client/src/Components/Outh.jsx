import { Button, Spinner } from "flowbite-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import {useDispatch,useSelector} from  'react-redux'
import { signInSuccess } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Outh() {
  const [loading,setLoading] =   useState(false)
  const dispatch  = useDispatch()
  const navigate  = useNavigate()

  const handleClick = async () => {
    setLoading(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    try {
      const infoFromGoogle = await signInWithPopup(auth, googleProvider);
 

      const response = await fetch("api/auth/google", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: infoFromGoogle.user.displayName,
          email: infoFromGoogle.user.email,
          photoUrl: infoFromGoogle.user.photoURL,
        }),
      });
      const res = await response.json();

      if(response.ok){
        setLoading(false)
        dispatch(signInSuccess(res))
        navigate('/')
      }
      setLoading(false)
     console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
    <Button
    disabled = {loading}
      type="button"
      gradientDuoTone={"pinkToOrange"}
      onClick={handleClick}
      outline
    >
      {loading ? (
        <>
        <Spinner/>
        <span className="ml-3">Loading....</span>
        </>
      ):(
        <>
        <FcGoogle className="mr-3 w-6 h-6" />
        Continue With Google
        </>

      )}
    </Button>
  );
}
