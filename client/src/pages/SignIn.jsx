import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
export default function SignIn() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false)
  const navigation = useNavigate()
 console.log("data",data)
  const handleSubmit = async (e) => {


    e.preventDefault();
    if (!data.email || !data.password) {
      return setError("All Fields Are Required ....");
    }else{
    try {
      setLoading(true)
      const response = await fetch("/api/auth/sign-in", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.success === false) {
        
        setLoading(false)
        return setError(res.message);
      }
      setLoading(false)
      setError(null)
      navigation('/sign-in')
      console.log(res);
    } catch (error) {
      setError(error.message);
      setLoading(false)
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
          <p className="mt-5 text-sm">
            This is Blog Project, You Can Sign Up With Your Email and Password
            Or Google
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
            </div>
          </form>
          <div className="flex gap-2 items-center mt-5 ">
            <p>Have An account ? </p>
            <Link className="text-blue-500 font-bold" to="/sign-in">
              Sign in
            </Link>
          </div>
          {error && (<Alert color="failure">{error}</Alert>) }
        </div>
      </div>
    </div>
  );
}
