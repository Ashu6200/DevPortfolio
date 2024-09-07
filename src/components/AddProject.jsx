"use client";
import React, { useState } from "react";
import Highlight from "./Highlight";
import Image from "next/image";
import CreatableSelect from "react-select/creatable";
import { useSubmitProject } from "@/hooks";

const AddProject = () => {
  const { submitProject, loading } = useSubmitProject();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keyPoints, setKeyPoints] = useState([
    { title: "", points: [""] },
  ]);
  const [projectImage, setProjectImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null)
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [rating, setRating] = useState();

  const handleTechnologiesChange = (skills) => {
    setTechnologies(skills);
  };

  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
    }),
  };
  const [dragging, setDragging] = useState(false);
  const handleFileChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    setProjectImage(file)
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setPreviewImage(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };
  const handleDragOver = e => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = e => {
    e.preventDefault();
    setDragging(false);
  };
  const handleDrop = e => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.file?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setProjectImage(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };
  const reseTFields = (e) => {
    e.preventDefault()
    setTitle("");
    setDescription("");
    setKeyPoints([{ title: "", points: [""] }]);
    setProjectImage("");
    setGithubLink("");
    setLiveLink("");
    setTechnologies([]);
    setRating();
  };
  const submit = async e => {
    e.preventDefault();
    submitProject(title, description, keyPoints, projectImage, githubLink, liveLink, technologies, rating)
    setTimeout(() => {
      reseTFields()
    }, 1000)

  };
  return (
    <form>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black text-[16px]'>
          Project Title
        </label>
        <input
          type='text'
          name='title'
          placeholder='Enter the Project Title'
          className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black text-[16px] placeholder:text-[16px]'
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black  text-[16px]'>
          Project Description
        </label>
        <textarea
          rows={5}
          type='text'
          name='title'
          placeholder='Enter the Project Description'
          className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black text-[16px] placeholder:text-[16px]'
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className='w-full'>
        <label className='pb-2 dark:text-[#fff] text-black  text-[16px]'>
          Project Image
        </label>
        <input
          type='file'
          accept='image/*'
          id='file'
          className='hidden'
          onChange={handleFileChange}
        />
        <label
          htmlFor='file'
          className={`w-full min-h-[10vh] border dark:border-[#755BB4] p-3 flex flex-col items-center justify-center rounded-[5px] mt-2 ${dragging ? "bg-blue-500" : "bg-transparent"
            }`}
          onDrag={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {previewImage ? (
            <>
              <Image
                src={previewImage}
                alt=''
                width={100}
                height={100}
                className='max-h-full w-full object-contain'
              />
              <button
                className='w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#755BB4] text-center text-[#fff] rounded mt-8 text-[16px]'
                onClick={() => { setPreviewImage(null), setProjectImage(null) }}
              >
                Remove Image
              </button>
            </>
          ) : (
            <span className='text-black dark:text-white'>
              Drag and drop your thumbnail here clickk to browse
            </span>
          )}
        </label>
      </div>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black  text-[16px]'>
          KeyPoints of Project
        </label>
        <Highlight
          setPoints={setKeyPoints}
          points={keyPoints}
          name={"keyPoints"}
          type={"Project"}
        />
      </div>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black  text-[16px]'>Github Link</label>
        <input
          type='url'
          name='title'
          placeholder='Enter the Project Title'
          className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black text-[16px] placeholder:text-[16px]'
          onChange={e => setGithubLink(e.target.value)}
        />
      </div>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black  text-[16px]'>Live Link</label>
        <input
          type='url'
          name='title'
          placeholder='Enter the Project Title'
          className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black text-[16px] placeholder:text-[16px]'
          onChange={e => setLiveLink(e.target.value)}
        />
      </div>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black  text-[16px]'>Rating</label>
        <input
          type='number'
          name='rating'
          placeholder='Enter the rating of Project '
          className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black text-[16px]  placeholder:text-[16px]'
          onChange={e => setRating(e.target.value)}
        />
      </div>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black  text-[16px]'>
          Technologies
        </label>
        <CreatableSelect
          isClearable
          isMulti
          classNamePrefix='select'
          options={technologies}
          styles={colourStyles}
          getOptionLabel={(option) => option.value}
          getOptionValue={(option) => option.value}
          onChange={handleTechnologiesChange}
          className='basic-multi-select bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-0 outline-none mb-4  dark:!text-[#fff] !text-black  text-[16px]'
        />
      </div>
      <div className="flex gap-2">
        <button
          disabled={loading}
          className='w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#755BB4] text-center text-[#fff] rounded mt-8 text-[16px]'
          onClick={submit}
        >
          Create Project
        </button>
        <button
          disabled={loading}
          className='w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[red] text-center text-[#fff] rounded mt-8 text-[16px]'
          onClick={reseTFields}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddProject;
