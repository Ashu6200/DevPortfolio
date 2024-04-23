import EditBlog from "@/components/EditBlog";
import React from "react";


const Page = ({ params }) => {
  const blogId = params.id;
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 sticky top-0 dark:bg-black bg-white'>
        Edit Blog
      </h1>
      <EditBlog blogId={blogId} />
    </div>
  );
};

export default Page;
