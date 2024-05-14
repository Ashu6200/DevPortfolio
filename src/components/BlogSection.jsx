"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

const BlogSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/blog");
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  return (
    <div className='w-full px-40 max-[890px]:px-[50px] max-[480px]:px-[20px] '>
      <div className=' text-center py-16 max-[480px]:py-0'>
        <h1 className='text-[44px] font-[600] max-[480px]:text-[32px]'>
          {`Today's`} <span className='text-[#755BB4]'>Blog</span>
        </h1>
        <p className='text-[14px] dark:text-white text-black font-[500] text-center  max-[480px]:text-justify'>
          {`A blog, short for "weblog," is a regularly updated website or online platform where individuals, organizations, or groups publish and share written, multimedia, or interactive content on various topics. Blogs typically feature entries or posts presented in reverse chronological order, with the most recent content appearing at the top.`}
        </p>
        <div className='w-full mt-10'>
          {data && data.slice(0, 2).map(item => {
            return <BlogCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
