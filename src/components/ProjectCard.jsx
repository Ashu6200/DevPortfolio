import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ item }) => {
  return (
    <div className='w-full mb-8 p-2 glass'>
      <Link href={`/project/${item._id}`}>
        <div className='flex gap-10 max-[480px]:flex-col'>
          <div className='w-[30%] h-[300px] rounded-[12px] max-[480px]:w-full'>
            <Image
              src={item.projectImage && item.projectImage}
              alt={item.title}
              width={300}
              height={300}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-[70%] max-[480px]:w-full relative'>
            <h1 className='text-[34px] font-[600] text-start text-[#755BB4]'>
              {item.title}
            </h1>
            <p className='text-[14px] dark:text-white text-black font-[500] text-justify'>
              {item.description}
            </p>
            <p className='dark:text-white text-black font-[600] text-[16px] text-start'>
              Skills :{" "}
            </p>
            <ul className={`flex flex-wrap gap-2`}>
              {item.technologies.map((sk, i) => {
                return (
                  <li
                    key={i}
                    className='text-[#755BB4] font-[600] text-[14px] uppercase'
                  >
                    {sk},
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
