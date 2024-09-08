import dynamic from "next/dynamic";
import React from "react";

const DynamicAddexperienceFrom = dynamic(async () => import("@/components/Addexperience"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
}
);
const Page = () => {
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <h1 className='text-[#755BB4] text-[24px] font-[600] mb-3 '>
        Add Experience
      </h1>
      <DynamicAddexperienceFrom />
    </div>
  );
};

export default Page;
