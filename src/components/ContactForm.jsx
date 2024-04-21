import React from "react";

const ContactForm = () => {
  return (
    <div className='w-[50%] py-16 max-[480px]:w-full'>
      <form className='w-[80%]  max-[480px]:w-full'>
        <div className='grid mb-3'>
          <label htmlFor='name' className='font-[600] text-[14px]'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
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
            name='Subject'
            id='Subject'
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
            name='Suggestion'
            id=''
            cols='40'
            rows='6'
            className='rounded-[20px] resize-none dark:border-none border-black outline-none pl-2 pt-1 text-[14px]'
            style={{
              border: "1px solid black",
            }}
          ></textarea>
        </div>
        <button className='bg-[#755BB4] p-2 rounded-[20px] font-[600] text-[14px] text-white'>
          Send Email to Ashutosh
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
