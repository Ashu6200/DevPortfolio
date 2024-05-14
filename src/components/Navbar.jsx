"use client";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { Navlinks } from "@/utils";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  const logout = (e) => {
    e.preventDefault();
    signOut();
    router.push(`/`)
  };
  const name = session && session.user.name.split(' ')[0];
  return (
    <div className='w-full sticky top-0 z-10'>
      <div
        className={`w-full flex items-center justify-between px-40 py-4 glass max-[480px]:px-[20px] max-[890px]:px-20`}
      >
        <div className='w-[100px] object-contain'>
          <Image
            src={"/images/logo.png"}
            alt='logo'
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
            quality={100}
            onClick={() => router.push(`/`)}
          />
        </div>
        <div className='flex items-center justify-center gap-8 max-[480px]:hidden max-[890px]:gap-5'>
          {Navlinks.map((nav, i) => {
            return (
              <Link key={i} href={nav.link}>
                <span
                  className={`text-[14px] font-[600] cursor-pointer link ${pathname === nav.link
                    ? "dark:text-[#755BB4] text-[#755BB4]"
                    : "text-black dark:text-white"
                    }`}
                >
                  {nav.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className='flex items-center justify-center gap-1'>
          <ThemeSwitcher />
          {session && session?.user ? (
            <div className='flex gap-2 items-center'>
              {session.user.isAdmin ? (
                <Link
                  href={"/admin"}
                  className='flex items-center justify-center'
                >
                  <span className='dark:text-[#755BB4] text-[#755BB4] text-[14px] font-[600]'>
                    Hi {name}
                  </span>
                </Link>
              ) : (
                <span className='dark:text-[#755BB4] text-[#755BB4] text-[14px] font-[600]'>
                  Hi {name}
                </span>
              )}
              <IoMdLogOut
                className='text-[#ea4a4a] cursor-pointer'
                size={25}
                onClick={logout}
              />
            </div>
          ) : (
            <button
              className='w-[100px] max-w-[100px] max-[890px]:w-[180px] p-[8px] max-[480px]:p-[5px] bg-[#755BB4] text-center text-[#fff] rounded'
              onClick={() => router.push(`/authentication`)}
            >
              Login
            </button>
          )}
          <div
            className='hidden max-[480px]:block relative mx-4'
            onClick={() => setShowMenu((prevState) => !prevState)}
          >
            <AiOutlineMenu className='cursor-pointer' size={25} />
            {showMenu && (
              <div className='flex flex-col items-center gap-3 absolute h-fit w-[100px] top-[30px] right-0 glass p-[10px] z-50 bg-white dark:bg-black'>
                {Navlinks.map((nav, i) => {
                  return (
                    <Link href={nav.link} key={i}>
                      <span
                        className={`text-[14px] font-[600] ${pathname === nav.link
                          ? "dark:text-[#755BB4] text-[#755BB4]"
                          : "text-black dark:text-white"
                          }`}
                      >
                        {nav.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
