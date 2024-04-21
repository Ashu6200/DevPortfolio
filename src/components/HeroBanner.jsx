import { socialIcons } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <section className='w-full px-40 max-[480px]:px-[20px] max-[890px]:px-20'>
      <div className='flex py-16 items-center justify-between'>
        <div className='w-[50%] max-[480px]:w-full'>
          <h1 className='text-[44px] font-[600] max-[890px]:text-[32px]'>
            Hi, I am <span className='text-[#755BB4]'>Ashutosh</span>
          </h1>
          <h1 className='text-[44px] font-[600] max-[890px]:text-[32px]'>
            <span className='text-[#755BB4]'>MERN</span> Stack Developer
          </h1>
          <p className='text-[14px] dark:text-white text-black font-[500] text-justify'>
            {`I'm a MERN Stack Developer specializing in MongoDB, Express.js,
            React, and Node.js. With a passion for building sleek, responsive
            web applications and a knack for clean, maintainable code, I bridge
            the gap between front-end and back-end development. Let's work
            together to bring your web projects to life!`}
          </p>
          <div className='flex gap-6 cursor-pointer mt-6'>
            {socialIcons.map((item) => (
              <div key={item.id}>
                <Link href={item.link} target='_blank'>
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='w-[50%] flex justify-end max-[480px]:hidden'>
          <div className='w-[400px] h-[400px] relative bg-[#755BB4] rounded-[12px] max-[890px]:w-[250px] max-[890px]:h-[250px]'>
            <div className='w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] dark:border-white absolute max-[890px]:w-[250px] max-[890px]:h-[250px]'>
              <div className='absolute top-[-144px] left-[-5px] max-[890px]:top-[-115px]'>
                <Image
                  src={"/images/myPic.png"}
                  alt='logo'
                  width={300}
                  height={400}
                  className='w-[300px] max-[890px]:w-[200px] '
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
