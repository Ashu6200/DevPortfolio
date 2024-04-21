import React, { cache } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Protected } from "@/utils/ProtectedRoutes";
import axios from "axios";


const getAllProject = cache(async () => {
  const { data } = await axios.get(`${process.env.NEXTAUTH_URL}/api/work`, {
    next: { cache: "force-cache" }
  });
  return data;
})

const Project = async () => {
  const data = await getAllProject();
  return (
    <Protected>
      <Navbar />
      <section className='w-full h-full'>
        <div className='w-full px-40 max-[480px]:px-[20px] max-[890px]:px-20'>
          <div className=' text-center py-16'>
            <h1 className='text-[44px] font-[600]'>
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

export default Project;
