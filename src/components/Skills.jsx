import { skills } from "@/assets";
import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <section className='mt-8 px-32 pt-32 max-[480px]:pt-0 max-[480px]:px-[20px] max-[890px]:px-20 w-full'>
      <div className='flex item-center justify-between flex-wrap  gap-2 max-[890px]:flex-nowrap max-[890px]:overflow-x-scroll max-[890px]:justify-center max-[890px]:w-full'>
        {skills.map((item, key) => {
          return (
            <div key={key} className='w-[80px] h-auto'>
              <div className='flex items-center justify-center flex-col gap-2 w-full h-full'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className='w-[auto] h-[60px]  aspect-[3/3] object-cover'
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
