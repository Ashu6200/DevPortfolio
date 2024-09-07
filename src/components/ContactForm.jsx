"use client"
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    suggestion: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      form_name: formData.name,
      to_name: "Ashutosh",
      reply_to: formData.email,
      message: formData.suggestion,
    };

    try {
      await emailjs.send("service_9q5fuh2", "template_607ne0f", {
        to_name: "Tester",
        from_name: formData.name,
        message: templateParams.message,
        reply_to: templateParams.reply_to,
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <div className='w-[50%] py-16 max-[480px]:w-full'>
      <form className='w-[80%]  max-[480px]:w-full' onSubmit={handleSubmit}>
        <div className='grid mb-3'>
          <label htmlFor='name' className='font-[600] text-[14px]'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleInputChange}
            className='rounded-[20px] h-[40px] pl-2 text-[14px] outline-none'
            style={{
              border: "1px solid black",
            }}
          />
        </div>
        <div className='grid mb-3'>
          <label htmlFor='email' className='font-[600] text-[14px]'>
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleInputChange}
            className='rounded-[20px] h-[40px] pl-2 text-[14px] outline-none'
            style={{
              border: "1px solid black",
            }}
          />
        </div>
        <div className='grid mb-3'>
          <label htmlFor='Subject' className='font-[600] text-[14px]'>
            Subject
          </label>
          <input
            type='text'
            name='subject'
            id='subject'
            value={formData.subject}
            onChange={handleInputChange}
            className='rounded-[20px] h-[40px] pl-2 text-[14px] outline-none'
            style={{
              border: "1px solid black",
            }}
          />
        </div>
        <div className='grid mb-3'>
          <label htmlFor='Suggestion' className='font-[600] text-[14px]'>
            Message
          </label>
          <textarea
            name='suggestion'
            id=''
            cols='40'
            rows='6'
            value={formData.suggestion}
            onChange={handleInputChange}
            className='rounded-[20px] resize-none dark:border-none border-black outline-none pl-2 pt-1 text-[14px]'
            style={{
              border: "1px solid black",
            }}
          ></textarea>
        </div>
        <button disabled={loading} className='bg-[#755BB4] p-2 rounded-[20px] font-[600] text-[14px] text-white'>
          Send Email to Ashutosh
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
