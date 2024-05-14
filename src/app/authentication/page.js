"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      localStorage.setItem("ashutoshPortfolio", session)
      redirect("/");
    }
  }, [session]);
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <form className='glass p-[20px] max-w-[400px] w-full text-center'>
        <h2 className='font-[600] text-[18px]'>
          Welcome To Ashutosh Protfolio ! <br />
        </h2>
        <div className='flex items-center justify-center my-3 text-black dark:text-white'>
          <div
            className='flex items-center bg-white p-[15px] rounded-xl  border dark:border-[#755BB4]'
            onClick={() => signIn("google")}
          >
            <FcGoogle className='cursor-pointer mr-2' />
            <span className='text-black'>Sign In with Google</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
