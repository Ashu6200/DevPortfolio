"use client"
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Protected } from "@/utils/ProtectedRoutes";
import axios from "axios";



const Page = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/work`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])
  return (
    <Protected>
      <Navbar />
      <section className='w-full h-full'>
        <div className='w-full px-40 max-[480px]:px-[20px] max-[890px]:px-20'>
          <div className=' text-center py-16'>
            <h1 className='text-[44px] font-[600] max-[480px]:text-[32px]'>
              My <span className='text-[#755BB4]'>Projects</span>
            </h1>
            <p className='text-[14px] dark:text-white text-black font-[500] text-center'>
              {`A software project definition, also known as a project charter or project initiation document, is a critical document that serves as the foundation for any software development effort. It outlines the purpose, objectives, scope, stakeholders, and overall plan for the software project.`}
            </p>
            <div className='w-full mt-10'>
              {Array.isArray(data) &&
                data.map((item) => {
                  return <ProjectCard key={item._id} item={item} />;
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
