"use client"
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { useGlobalContext } from "@/context/Index";

const Page = () => {
  const { projectAllData } = useGlobalContext()
  return (
    <section className='w-full h-full'>
      <div className='w-full px-40 max-[480px]:px-[20px] max-[890px]:px-20'>
        <div className=' text-center py-16'>
          <h1 className='text-[44px] font-[600] max-[480px]:text-[32px]'>
            My <span className='text-[#755BB4]'>Projects</span>
          </h1>
          <p className='text-[14px] dark:text-white text-black font-[500] text-center'>
            {`A software project definition, also known as a project charter or project initiation document, is a critical document that serves as the foundation for any software development effort. It outlines the purpose, objectives, scope, stakeholders, and overall plan for the software project.`}
          </p>
          <div className='w-full grid grid-cols-3 gap-4 max-[480px]:grid-cols-1 mt-4'>
            {Array.isArray(projectAllData) &&
              projectAllData.map((item) => {
                return <ProjectCard key={item._id} item={item} />;
              })}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Page;
