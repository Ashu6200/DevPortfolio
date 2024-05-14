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
    <div className='w-full glass p-5'>
      <div className='flex gap-10 max-[480px]:flex-col'>
        <div className='w-[30%] h-[300px] rounded-[12px] max-[480px]:w-full'>
          <Image
            src={project.projectImage && project.projectImage}
            alt={project.title}
            width={300}
            height={300}
            className='w-auto h-auto object-cover min-w-full min-h-full'
          />
        </div>
        <div className='w-[70%] max-[480px]:w-full'>
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
          <h1 className='text-[35px] font-[600] text-start text-[#755BB4]'>
            {project.title}
          </h1>
          <p className='text-[14px] dark:text-white text-black font-[500] text-justify'>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            {project.technologies && project.technologies.map((tech, key) => {
              return (
                <p key={key} className="dark:text-white text-black bg-[#755BB4] py-1 px-[10px] rounded-2xl capitalize">
                  {tech}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectCard;
