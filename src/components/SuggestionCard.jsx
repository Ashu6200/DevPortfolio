import React from "react";

const SuggestionCard = ({ item }) => {
  return (
    <div className='w-full glass p-[20px]'>
      <div className='flex flex-col gap-2'>
        <p className='text-[rgb(117,91,180)] text-[16px] font-[600]'>
          {item.user.username}{" "}
          <span className='text-black dark:text-white text-[12px]'>
            {item.user.email}
          </span>
        </p>
        <p className='text-black dark:text-white text-[14px] font-[600]'>
          {item.suggestionMessage}
        </p>
      </div>
    </div>
  );
};

export default SuggestionCard;
