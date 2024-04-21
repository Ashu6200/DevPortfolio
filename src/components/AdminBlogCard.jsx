"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

const AdminBlogCard = ({ blog }) => {
  const router = useRouter();
  const deleteHandler = async () => {
    try {
      const res = await axios.delete(`/api/blog/${blog._id}`);
      if (res.status === 200 && res.statusText === "OK") {
        toast.success("Blog successfully Deleted");
      } else {
        toast.error("Failed to delete Blog");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };
  return (
    <div className='w-full glass p-5'>
      <div className='flex gap-10 max-[480px]:flex-col'>
        <div className='w-[30%] h-[300px] rounded-[12px] max-[480px]:w-full'>
          <Image
            src={blog.imageBlog}
            alt={blog.title}
            width={300}
            height={300}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-[70%] max-[480px]:w-full'>
          <div className='flex items-center justify-end gap-3'>
            <MdModeEdit
              onClick={() => router.push(`/admin/editblog/${blog._id}`)}
              className={`dark:text-white text-[20px] mr-2 text-black cursor-pointer`}
            />
            <AiOutlineDelete
              onClick={deleteHandler}
              className={`dark:text-white text-[20px] mr-2 text-black cursor-pointer`}
            />
          </div>
          <h1 className='text-[35px] font-[600] text-start text-[#755BB4]'>
            {blog.title}
          </h1>
          <p className='text-[14px] dark:text-white text-black font-[500] text-justify'>
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogCard;
