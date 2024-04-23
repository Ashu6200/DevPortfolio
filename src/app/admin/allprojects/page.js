"use client";
import AdminProjectCard from "@/components/AdminProjectCard";
import axios from "axios";
import React, { useEffect, useState } from "react";



const Page = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/work`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 sticky top-0 dark:bg-black bg-white z-20'>
        All Project
      </h1>
      <div className='flex flex-col gap-5'>
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((project) => {
            return <AdminProjectCard project={project} key={project._id} />;
          })}
      </div>
    </div>
  );
};

export default Page;
