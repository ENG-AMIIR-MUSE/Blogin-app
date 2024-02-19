import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { signInStart,signInFailure,signInSuccess } from "../redux/slices/userSlice";
import Outh from "../Components/Outh";
export default function SignIn() {
  const [data, setData] = useState({});
  const navigation = useNavigate()
  const dispatch  = useDispatch()

  const {loading, error:errorMessage} = useSelector((state)=>state.user)
 console.log("data",data)
  const handleSubmit = async (e) => {


    e.preventDefault();
    if (!data.email || !data.password) {
      return dispatch(signInFailure("All Fields Are Required"))
    }else{
    try {
      dispatch(signInStart())
      const response = await fetch("/api/auth/sign-in", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.success === false) {
        
        return dispatch(signInFailure(res.message))
        
      }
      console.log("response from dev",res)
      dispatch(signInSuccess(res))
    
      console.log("response",res)
      if(response.ok){
        navigation('/')
        console.log(res);

      }
    } catch (error) {
     dispatch(signInFailure(error.message))
    }
  };}
  return (
    <div className="mt-20 min-h-screen">
      <div className="max-w-4xl m-auto flex flex-col   md:flex-row gap-4 p-5 md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className=" flex items-center   text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r  from-indigo-500 rounded-lg text-white via-purple-500 to-pink-500">
              Amiir
            </span>
            <span>Blog</span>
          </Link>
          <p className="mt-5 text-sm ">
           You Can   Sign With Username and Password Or Google Account 
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="" onSubmit={handleSubmit}>
            <div className="  flex flex-col gap-3 ">
          
              <div>
                <Label value="email" />
                <TextInput
                  type="email"
                  placeholder="name@Company.com"
                  id="email"
                  onChange={(e) =>
                    setData({
                      ...data,
                      [e.target.id]: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      [e.target.id]: e.target.value,
                    })
                  }
                />
              </div>
              <Button
                type="submit"
                disabled = {loading}
                gradientDuoTone="purpleToPink"
                className="w-full"
              >
                {loading ? (
                  <>
                  <Spinner size={30}/>
                  <span className="px-3">Loading ....</span>
                  </>
                ) : "Sign Up"}
              </Button>
              <Outh/>
            </div>
          </form>
          <div className="flex gap-2 items-center mt-5 ">
            <p>Dont't Have An Account ? </p>
            <Link className="text-blue-500 font-bold" to="/sign-up">
              Sign up
            </Link>
          </div>
          {errorMessage && (<Alert color="failure">{errorMessage}</Alert>) }
        </div>
      </div>
    </div>
  );
}
