import Navbar from "@/components/Navbar";
import { AdminProtected, Protected } from "@/utils/ProtectedRoutes";
import dynamic from "next/dynamic";
import React from "react";
const DynamicSideBar = dynamic(async () => import("@/components/AdminSideBar"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Adminlayout = ({ children }) => {
  return (
    <Protected>
      <AdminProtected>
        <Navbar />
        <div className='w-full h-[calc(100vh_-_115px)] pt-4'>
          <div className='flex w-full h-full gap-5 max-[890px]:flex-col'>
            <div className='w-[20%] h-full max-[890px]:w-full max-[890px]:h-fit'>
              <DynamicSideBar />
            </div>
            <div className='w-[80%] glass h-full p-[30px] max-[890px]:w-full'>
              {children}
            </div>
          </div>
        </div>
      </AdminProtected>
    </Protected>
  );
};

export default Adminlayout;
