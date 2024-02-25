import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" w-[100%] max-w-lg p-5 mx-auto ">
      <h1 className="font-bold text-center mb-2 text-xl md:text-3xl">
        Profile
      </h1>
      <form className="flex flex-col gap-2  ">
        <div className="self-center w-32 h-32  shadow-md rounded-full  ">
          <img
            className="w-full h-full object-cover rounded-full border-8 border-[lightgray]"
            src={currentUser.photoUrl}
            alt=""
          />
        </div>
        <Label value="Username" />
        <TextInput type="text" id="username" defaultValue={currentUser.username} />
        <Label value="Email" />
        <TextInput id="email" type="text" defaultValue={currentUser.email} />
        <Label value="password"  />
        <TextInput id="email" type="password" placeholder="Password" />
        <Button className="" outline gradientDuoTone={'purpleToBlue'}>Update</Button>
      </form>
      <div className="flex text-red-500 mt-2 justify-between ">
        <Link to={'/sign-in'}>Sign out </Link>
        <span className="">Delete Account</span>
      </div>
    </div>
  );
}
