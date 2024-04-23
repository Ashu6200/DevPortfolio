import dynamic from "next/dynamic";
import React from "react";
const DynamicAddProject = dynamic(async () => import("@/components/AddProject"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Page = () => {
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 sticky top-0 dark:bg-black bg-white'>
        Add Project
      </h1>
      <DynamicAddProject />
    </div>
  );
};

export default Page;
