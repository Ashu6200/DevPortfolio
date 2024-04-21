import AdminProjectCard from "@/components/AdminProjectCard";
import axios from "axios";
import React, { cache } from "react";


const getAllProject = cache(async () => {
  const { data } = await axios.get(`${process.env.NEXTAUTH_URL}/api/work`, {
    next: { cache: "force-cache" }
  });
  return data;
})

const AllProjectsPage = async () => {
  const data = await getAllProject() || [];
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

export default AllProjectsPage;
