'use client'
import SuggestionCard from "@/components/SuggestionCard";
import { useGlobalContext } from "@/context/Index";
import React from "react";

const Page = () => {
  const { suggestionAllData } = useGlobalContext()
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 sticky top-0 dark:bg-black bg-white'>
        All Suggesstion
      </h1>
      <div className='flex flex-col gap-[20px]'>
        {suggestionAllData &&
          suggestionAllData.map((item) => {
            return <SuggestionCard item={item} key={item._id} />;
          })}
      </div>
    </div>
  );
};

export default Page;
