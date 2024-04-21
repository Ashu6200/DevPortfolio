import React, { cache } from "react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Protected } from "@/utils/ProtectedRoutes";
import axios from "axios";


const getAllBlog = cache(async () => {
  const { data } = await axios.get(`${process.env.NEXTAUTH_URL}/api/blog`, {
    next: { cache: "force-cache" }
  });
  return data;
})
const Page = async () => {
  const data = await getAllBlog();
  return (
    <Protected>
      <Navbar />
      <section className='w-full h-full'>
        <div className='w-full px-40 max-[480px]:px-[20px] max-[890px]:px-20'>
          <div className=' text-center py-16'>
            <h1 className='text-[44px] font-[600]'>
              {`Today's`} <span className='text-[#755BB4]'>Blog</span>
            </h1>
            <p className='text-[14px] dark:text-white text-black font-[500] text-center'>
              {`A blog, short for "weblog," is a regularly updated website or online platform where individuals, organizations, or groups publish and share written, multimedia, or interactive content on various topics. Blogs typically feature entries or posts presented in reverse chronological order, with the most recent content appearing at the top.`}
            </p>
            <div className='w-full mt-10'>
              {Array.isArray(data) &&
                data.map((item) => {
                  return <BlogCard key={item._id} item={item} />;
                })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Protected>
  );
};

export default Page;
