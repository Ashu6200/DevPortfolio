"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

const AdminProjectCard = ({ project, data, setData }) => {
  const router = useRouter();
  const deleteHandler = async () => {
    try {
      const res = await axios.delete(`/api/work/${project._id}`);
      if (res.status === 200 || res.statusText === "OK") {
        toast.success("Project successfully Deleted");
        setData(data.filter(data => data._id !== project._id))
      } else {
        toast.error("Failed to delete Project");
      }
    } catch (error) {
      console.error("Error deleting Project", error);
      toast.error("An error occurred");
    }
  };
  return (
    <div className='w-full glass rounded-3xl'>
      <div className='h-[300px] rounded-[12px] max-[480px]:w-full'>
        <Image
          src={project.projectImage && project.projectImage}
          alt={project.title}
          width={300}
          height={300}
          className='w-auto h-auto object-cover min-w-full min-h-full rounded-t-2xl'
        />
      </div>
      <div className='w-full py-2 px-4 mt-2'>
        <div className='flex items-center justify-end gap-3'>
          <MdModeEdit
            onClick={() => router.push(`/admin/editproject/${project._id}`)}
            className={`dark:text-white text-[20px] mr-2 text-black cursor-pointer`}
          />
          <AiOutlineDelete
            onClick={deleteHandler}
            className={`dark:text-white text-[20px] mr-2 text-black cursor-pointer`}
          />
        </div>
        <h1 className='text-[18px] font-[600] text-start text-[#755BB4]'>
          {project.title}
        </h1>
        <p className='text-[14px] dark:text-white text-black font-[500] text-justify'>
          {project.description.substring(0, 250)}
        </p>
      </div>

    </div>
  );
};

export default AdminProjectCard;
