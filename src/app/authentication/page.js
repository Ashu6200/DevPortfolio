"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
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

// const [typeForm, setTypeForm] = useState("Sign Up");
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [loading, setLoading] = useState(false);
// const regiserHandler = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   try {
//     const respone = await fetch("/api/auth/register", {
//       method: "POST",
//       body: JSON.stringify({
//         name: name,
//         email: email,
//         password: password,
//       }),
//     });
//     // const res = await axios.post("/api/auth/register");
//     console.log(respone);
//     setLoading(false);
//     setTypeForm("Sign In");
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

{
  /* <span className='text-[#755BB4]'>{typeForm}</span> */
  {
    /* {typeForm === "Sign Up" && (
          <div className='my-2 flex flex-col'>
            <label className='pb-2 dark:text-[#fff] text-black text-start'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter your Name'
              className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className='my-2 flex flex-col'>
          <label className='pb-2 dark:text-[#fff] text-black text-start'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your Email Address'
            className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='my-2 flex flex-col'>
          <label className='pb-2 dark:text-[#fff] text-black text-start'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your Password'
            className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className='w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#755BB4] text-center text-[#fff] rounded mt-8'
          disabled={loading}
          onClick={() => {
            if (typeForm === "Sign Up") {
              regiserHandler();
            }
          }}
        >
          {typeForm}
        </button>
        <br />
        <div className='flex items-center justify-center my-3 text-black dark:text-white'>
          <FcGoogle
            className='cursor-pointer mr-2'
            onClick={() => signIn("google")}
          />
        </div>
        {typeForm === "Sign In" && (
          <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white '>
            Not have any account?{" "}
            <span
              className='text-[#755BB4] pl-1 cursor-pointer font-[600]'
              onClick={() => setTypeForm("Sign Up")}
            >
              Sign Up
            </span>
          </h5>
        )}
        {typeForm === "Sign Up" && (
          <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
            Already have any account?{" "}
            <span
              className='text-[#755BB4] pl-1 cursor-pointer font-[600]'
              onClick={() => setTypeForm("Sign In")}
            >
              Sign In
            </span>
          </h5>
        )} */
  }
}
