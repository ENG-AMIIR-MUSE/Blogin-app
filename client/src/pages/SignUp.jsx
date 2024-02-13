import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="mt-20">
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
          <form className="">
            <div class="relative  flex flex-col gap-3 ">
              <div>
                <Label value="Username" />
                <TextInput type="text" placeholder="Enter Username" />
              </div>
              <div>
                <Label value="email" />
                <TextInput type="email" placeholder="name@Company.com" />
              </div>
              <div>
                <Label value="Password" />
                <TextInput type="password" placeholder="Enter Password" />
              </div>
            <Button gradientDuoTone="purpleToPink" className="w-full">Signup</Button>
            </div>
          </form>
          <div className="flex gap-2 items-center mt-5 ">
            <p>Have An account ? </p>
            <Link className="text-blue-500 font-bold" to  = '/sign-in'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
