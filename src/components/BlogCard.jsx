
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ item }) => {
  return (
    <div className='w-full glass rounded-3xl'>
      <Link href={`/blog/${item._id}`}>
        <div className='h-[300px] rounded-[12px] max-[480px]:w-full'>
          <Image
            src={item.imageBlog && item.imageBlog}
            alt={item.title}
            width={300}
            height={300}
            className='w-auto h-auto object-cover min-w-full min-h-full rounded-t-2xl'
          />
        </div>
        <div className='py-2 px-4'>
          <h1 className='text-[18px] font-[600] text-start text-[#755BB4]'>
            {item.title}
          </h1>
          <p className='text-[14px] dark:text-white text-black font-[500] text-justify'>
            {item.description.substring(0, 200)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
