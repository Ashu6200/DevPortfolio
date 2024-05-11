"use client"
import AdminBlogCard from "@/components/AdminBlogCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/blog`);
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
        All Blog
      </h1>
      <div className='flex flex-col gap-5'>
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((blog) => {
            return <AdminBlogCard blog={blog} key={blog._id} data={data} />;
          })}
      </div>
    </div>
  );
};

export default Page;
