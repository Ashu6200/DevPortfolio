"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

const Highlight = ({ points, setPoints, name, type }) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(points?.length).fill(false)
  );
  const handleCollapseToggle = (index) => {
    const updateCollapsed = [...isCollapsed];
    updateCollapsed[index] = !updateCollapsed[index];
    setIsCollapsed(updateCollapsed);
  };
  const handleRemovePoint = (index, linkIndex) => {
    const updateData = [...points];
    updateData[index].points.splice(linkIndex, 1);
    setPoints(updateData);
  };
  const handleAddPoint = (index) => {
    const updateData = [...points];
    updateData[index].points.push("");
    setPoints(updateData);
  };
  const newContentHandler = (item) => {
    if (item.title === "" || item.points[0] === "") {
      console.log("some field has no title");
    }
    const newContent = {
      title: "",
      points: [""],
    };
    setPoints([...points, newContent]);
  };
  return (
    <>
      {points &&
        points?.map((item, index) => {
          const showSectionInput =
            index === 0 || item?.title !== points[index - 1]?.title;
          return (
            <React.Fragment key={index}>
              <div
                className={`flex w-full items-center justify-between gap-2 ${isCollapsed[index] &&
                  "bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black w-full"
                  }`}
              >
                {isCollapsed[index] ? (
                  <>
                    {item?.title ? (
                      <p className=''>
                        {index + 1}. {item.title}
                      </p>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <>
                    {showSectionInput && (
                      <div className='my-2 flex flex-col w-full'>
                        <label className='pb-2 dark:text-[#fff] text-black text-[16px] '>
                          {index + 1}. Enter the {`${(type, name)}`} Title
                        </label>
                        <input
                          type='text'
                          name='title'
                          value={item.title}
                          placeholder={`Enter the ${type} points title`}
                          className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black w-full text-[16px] '
                          onChange={(e) => {
                            const updateData = [...points];
                            updateData[index].title = e.target.value;
                            setPoints(updateData);
                          }}
                        />
                      </div>
                    )}
                  </>
                )}
                <div className='flex items-center'>
                  <AiOutlineDelete
                    className={`dark:text-white  text-[20px] mr-2 text-black ${index > 0 ? "cursor-pointer" : "cursor-no-drop"
                      }`}
                    onClick={() => {
                      if (index > 0) {
                        const updateData = [...points];
                        updateData.splice(index, 1);
                        setPoints(updateData);
                      }
                    }}
                  />
                  <MdOutlineKeyboardArrowDown
                    fontSize={"large"}
                    className={`dark:text-white text-black`}
                    style={{
                      transform: isCollapsed[index]
                        ? "rotate(180deg)"
                        : "rotate(0deg",
                    }}
                    onClick={() => handleCollapseToggle(index)}
                  />
                </div>
              </div>
              {!isCollapsed[index] && (
                <React.Fragment>
                  {item?.points?.map((link, linkIndex) => {
                    return (
                      <div className='mb-3 block' key={linkIndex}>
                        <label
                          htmlFor=''
                          className='block pb-1 dark:text-[#fff] text-black text-[16px]  '
                        >
                          {index + 1}.{linkIndex + 1}.{" "}
                          {`Enter the ${(type, name)} points`}
                        </label>
                        <div className='w-full flex items-baseline justify-between gap-2'>
                          <input
                            type='text'
                            name=''
                            id=''
                            placeholder={`Enter the ${type} key points`}
                            className='text-[16px]  bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black w-full'
                            value={link}
                            onChange={(e) => {
                              const updatedata = [...points];
                              updatedata[index].points[linkIndex] =
                                e.target.value;
                              setPoints(updatedata);
                            }}
                          />
                          <AiOutlineDelete
                            className={`dark:text-white  text-[20px] text-black ${linkIndex === 0
                              ? "cursor-no-drop"
                              : "cursor-pointer"
                              }`}
                            onClick={() => {
                              linkIndex === 0
                                ? null
                                : handleRemovePoint(index, linkIndex);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className='inline-block mb-4'>
                    <p
                      className='flex items-center text-[16px] dark:text-white text-black cursor-pointer'
                      onClick={() => handleAddPoint(index)}
                    >
                      <IoAddCircle className='mr-2' />
                      {`Add  ${type} ${name} points`}
                    </p>
                  </div>
                </React.Fragment>
              )}
              {index === points.length - 1 && (
                <div
                  className='flex items-center text-[16px] dark:text-white text-black cursor-pointer'
                  onClick={() => newContentHandler(item)}
                >
                  <IoAddCircle className='mr-2' />
                  {`Add New ${type} ${name}`}
                </div>
              )}
            </React.Fragment>
          );
        })}
    </>
  );
};

export default Highlight;
