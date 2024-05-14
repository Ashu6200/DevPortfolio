import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ item }) => {
  return (
    <div className='w-full mb-8 glass p-2'>
      <Link href={`/blog/${item._id}`}>
        <div className='flex gap-10 max-[480px]:flex-col'>
          <div className='w-[30%] h-[300px] rounded-[12px] max-[480px]:w-full'>
            <Image
              src={item.imageBlog && item.imageBlog}
              alt={item.title}
              width={300}
              height={300}
              className='w-auto h-auto object-cover max-w-[300] max-h-[300]'
            />
          </div>
          <div className='w-[70%] max-[480px]:w-full'>
            <h1 className='text-[34px] max-[480px]:text-[24px] font-[600] text-start text-[#755BB4]'>
              {item.title}
            </h1>
            <p className='text-[14px] dark:text-white text-black font-[500] text-justify'>
              {item.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
