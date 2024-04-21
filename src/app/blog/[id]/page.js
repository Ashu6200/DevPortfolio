import React, { cache } from "react";
import axios from "axios";
import { Protected } from "@/utils/ProtectedRoutes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const getSingleBlog = cache(async (id) => {
  const { data } = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/blog/${id}`, {
    next: { cache: "force-cache" }
  })
  return data;
})
const Page = async ({ params }) => {
  const data = await getSingleBlog(params.id);
  return (
    <Protected>
      <Navbar />
      <section className='w-full py-16'>
        <div className='flex flex-col px-40 w-full max-[480px]:px-[20px] max-[480px]:flex-col max-[890px]:px-20 gap-5'>
          <div className='flex gap-5 max-[480px]:flex-col'>
            <div className='w-[40%] max-[480px]:w-full max-[480px]:h-[300px] rounded-[12px]'>
              <Image
                src={data.imageBlog}
                alt={data.title}
                width={300}
                height={300}
                className='w-full h-auto object-cover'
              />
            </div>
            <div className='w-[60%] max-[480px]:w-full'>
              <h1 className='text-[30px] font-[600] text-start text-[#755BB4]'>
                {data.title}
              </h1>
              <p className='text-[14px] dark:text-white text-black font-[500] text-justify'>
                {data.description}
              </p>
            </div>
          </div>
          <div className='mt-4'>
            {data.higlights.length && data.higlights && data.higlights.map(item => {
              return (
                <div className='mt-2' key={item._id}>
                  <h2 className='text-[24px] font-[600] text-start text-[#755BB4]'>
                    {item.title}
                  </h2>
                  <ul style={{ listStyleType: "disc" }} className='ml-4'>
                    {item.points.map(point => {
                      return (
                        <li
                          key={point._id}
                          className='font-[600] text-[14px] text-start'
                        >
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </Protected>
  );
};

export default Page;
