"use client";
import React from "react";
import { signIn } from "next-auth/react"



const LoginButton = () => {
  return <button className="btn  btn-primary" onClick={()=>signIn()}>Log In Now</button>;
};

export default LoginButton;