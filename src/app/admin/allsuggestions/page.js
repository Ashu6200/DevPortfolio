'use client'
import SuggestionCard from "@/components/SuggestionCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/suggestion`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 sticky top-0 dark:bg-black bg-white'>
        All Suggesstion
      </h1>
      <div className='flex flex-col gap-[20px]'>
        {data &&
          data.map((item) => {
            return <SuggestionCard item={item} key={item._id} />;
          })}
      </div>
    </div>
  );
};

export default Page;
