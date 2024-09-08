"use client";
import AdminProjectCard from "@/components/AdminProjectCard";
import { useGlobalContext } from "@/context/Index";
import React from "react";



const Page = () => {
  const { projectAllData, setProjectAllData } = useGlobalContext()
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 '>
        All Project
      </h1>
      <div className='grid grid-cols-3 gap-4 mt-4 max-[480px]:grid-cols-1 max-[890px]:grid-cols-2'>
        {Array.isArray(projectAllData) &&
          projectAllData.map((project) => {
            return <AdminProjectCard project={project} key={project._id} data={projectAllData} setData={setProjectAllData} />;
          })}
      </div>
    </div>
  );
};

export default Page;
