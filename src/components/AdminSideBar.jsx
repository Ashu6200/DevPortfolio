"use client";
import { AdminSections } from "@/utils";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AdminSideBar = () => {
  const pathname = usePathname();
  return (
    <div className='w-full h-full flex flex-col gap-5 p-[20px] bg-white dark:bg-black glass max-[890px]:flex-row max-[890px]:overflow-x-scroll max-[890px]:gap-5 max-[890px]:p-[10px] max-[890px]:items-center'>
      {AdminSections.map((nav, i) => (
        <Link key={i} href={`${nav.link}`}>
          <p
            className={`flex gap-3 text-[16px] font-[600] cursor-pointer ${pathname === nav.link
              ? "dark:text-[#755BB4] !text-[#755BB4]"
              : "text-black dark:text-white"
              } min-w-max`}
          >
            <span>
              {nav.icons}
            </span>
            <span>
              {nav.name}
            </span>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default AdminSideBar;
