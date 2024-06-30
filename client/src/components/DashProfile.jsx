import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
    <form className="flex flex-col gap-4">
      <h1 className="text-center my-4 text-3xl font-semibold">Profile</h1>
      <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden">
        <img
          src={currentUser.proflePicture}
          alt="user"
          className="rounded-full w-full h-full object-cover border-8 border-[lightgray] "
        />
      </div>
      <TextInput type="text" id="username" defaultValue={currentUser.username}></TextInput>
      <TextInput type="email" id="email" defaultValue={currentUser.email}></TextInput>
      <TextInput type="password" id="password"  ></TextInput>
      <Button type="submit" className="" gradientDuoTone={'purpleToBlue'}>Update</Button>
    </form>
    <div className="text-red-500 flex justify-between mt-5">
      <span className="cursor-pointer">Delete Account</span>
      <span className="cursor-pointer">Sign Out</span>
    </div>
    </div>
  );
}
