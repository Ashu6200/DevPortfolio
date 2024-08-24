"use client"
import AdminBlogCard from "@/components/AdminBlogCard";
import React from "react";

const Page = () => {
  const { blogAllData, setBlogAllData } = useGlobalContext()

  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 sticky top-0 dark:bg-black bg-white z-20'>
        All Blog
      </h1>
      <div className='grid grid-cols-3 mt-4 max-[480px]:grid-cols-1'>
        {Array.isArray(blogAllData) &&
          blogAllData.length > 0 &&
          blogAllData.map((blog) => {
            return <AdminBlogCard blog={blog} key={blog._id} data={blogAllData} setData={setBlogAllData} />;
          })}
      </div>
    </div>
  );
};

export default Page;
