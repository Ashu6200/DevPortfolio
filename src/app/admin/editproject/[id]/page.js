
import Editproject from "@/components/Editproject";
import React from "react";

const Page = ({ params }) => {
  const projectId = params.id;
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 '>
        Edit Project -
      </h1>
      <Editproject projectId={projectId} />
    </div>
  );
};

export default Page;
