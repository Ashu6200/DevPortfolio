"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const SuggestionForm = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [email, setmail] = useState(
    session && session.user ? session.user.email : ""
  );
  const [suggestionMessage, setsuggestionMessage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (session) {
      setLoading(true);
      const data = {
        user: session.user.id,
        suggestionMessage,
      };
      try {
        const res = await axios.post("/api/suggestion", data);
        if (res.status === 200 && res.statusText === "OK") {
          toast.success("Suggestion successfully sent");
        } else {
          toast.error("Failed to send Suggestion");
        }
      } catch (error) {
        console.error("Error sending Suggestion", error);
        toast.error("An error occurred");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please login first");
    }
    setsuggestionMessage("");
  };
  return (
    <form className='w-[70%] max-[480px]:w-full'>
      <div className='grid mb-3'>
        <label htmlFor='name' className='font-[600] text-[14px]'>
          Name
        </label>
        <input
          type='text'
          name=''
          id='name'
          readOnly
          value={email}
          className='rounded-[10px] h-[40px] pl-2 text-[14px] outline-none'
          style={{
            border: "1px solid black",
          }}
        />
      </div>
      <div className='grid mb-3'>
        <label htmlFor='Suggestion' className='font-[600] text-[14px]'>
          Suggestion
        </label>
        <textarea
          name='Suggestion'
          id=''
          cols='40'
          rows='6'
          value={suggestionMessage}
          className='rounded-[10px] resize-none dark:border-none border-black outline-none pl-2 pt-1 text-[14px]'
          style={{
            border: "1px solid black",
          }}
          onChange={(e) => setsuggestionMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        disabled={loading}
        className='bg-[#755BB4] p-2 rounded-[20px] font-[600] text-[14px] text-white'
        onClick={submitHandler}
      >
        Send Suggestion to Ashutosh
      </button>
    </form>
  );
};

export default SuggestionForm;
