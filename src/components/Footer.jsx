import React from "react";
import SuggestionForm from "./SuggestionForm";

const Footer = () => {
  return (
    <div className='w-full px-40 glass max-[480px]:px-[20px] max-[890px]:px-20'>
      <div className='flex justify-between py-10 max-[480px]:flex-col'>
        <div className='w-[50%] max-[480px]:w-full'>
          <h1 className='text-[#755BB4] text-[24px] font-[600] mb-4'>
            Have a Great Day Today !
          </h1>
          <p className='text-[14px] dark:text-white text-black font-[500]'>
            {`Thank you for the conversation! If you ever need assistance or have
            more questions in the future, don't hesitate to reach out. Have a
          wonderful day, and goodbye for now!`}
          </p>
        </div>
        <div className='w-[50%] flex max-[480px]:w-full max-[480px]:mt-[20px] flex-col items-end max-[480px]:items-start'>
          <h1 className='text-[#755BB4] text-[24px] font-[600] mb-4 text-start'>
            Give Some Suggesstion
          </h1>
          <SuggestionForm />
        </div>
      </div>
      <div className='text-center'>
        <p className='text-[14px] dark:text-white text-black font-[500]'>
          @copyright
          <span className='text-[#755BB4]'> ashutoshkewat1@gmail.com </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
