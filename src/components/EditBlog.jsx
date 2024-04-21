"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Highlight from "./Highlight";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const EditBlog = ({ blogId }) => {
  const router = useRouter();
  const [editblogData, setEditblogData] = useState({});
  const getProjectData = useCallback(async () => {
    try {
      const res = await axios.get(`/api/blog/${blogId}`);
      if (res.status === 200 && res.statusText === "OK") {
        setEditblogData(res.data);
      }
    } catch (error) {
      console.error("Error deleting Project", error);
    }
  }, [blogId]);

  useEffect(() => {
    getProjectData();
  }, [getProjectData]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [highlight, setHighlight] = useState([
    { title: "Untitled Title", points: [""] },
  ]);
  const [imageBlog, setImageBlog] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setImageBlog(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (editblogData) {
      setTitle(editblogData.title);
      setDescription(editblogData.description);
      setHighlight(
        editblogData.higlights || [{ title: "Untitled Title", points: [""] }]
      );
      setImageBlog(editblogData.imageBlog);
    }
  }, [editblogData]);
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.file?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setImageBlog(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: title,
      description: description,
      higlights: highlight,
      imageBlog: imageBlog,
    };

    try {
      const res = await axios.put(`/api/blog/${blogId}`, data);
      if (res.status === 200 && res.statusText === "OK") {
        console.log(res.blog);
        toast.success("Blog successfully Edit");
      } else {
        toast.error("Failed to post blog");
      }
      setTimeout(() => {
        router.push("/admin/allblog");
      }, 2000);
    } catch (error) {
      console.error("Error posting blog", error);
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black '>Blog Title</label>
        <input
          type='text'
          name='title'
          value={title}
          placeholder='Enter the Blog Title'
          className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='my-2 flex flex-col'>
        <label className='pb-2 dark:text-[#fff] text-black '>
          Blog Description
        </label>
        <textarea
          rows={5}
          name='description'
          value={description}
          placeholder='Enter the Blog Description'
          className='bg-transparent border dark:border-[#755BB4] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 outline-none mb-4  dark:text-[#fff] text-black '
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='w-full'>
        <label className='pb-2 dark:text-[#fff] text-black '>
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
          className={`w-full min-h-[10vh] border dark:border-[#755BB4] p-3 flex flex-col items-center justify-center rounded-[5px] mt-2 ${
            dragging ? "bg-blue-500" : "bg-transparent"
          }`}
          onDrag={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {imageBlog ? (
            <>
              <Image
                src={imageBlog}
                alt=''
                width={100}
                height={100}
                className='max-h-full w-full object-contain'
              />
              <button
                className='w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#755BB4] text-center text-[#fff] rounded mt-8'
                onClick={() => setImageBlog(null)}
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
        <label className='pb-2 dark:text-[#fff] text-black '>
          Highlights of Blog
        </label>
        <Highlight
          setPoints={setHighlight}
          points={highlight}
          name={"highlight"}
          type={"Blog"}
        />
      </div>
      <button
        disabled={loading}
        className='w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#755BB4] text-center text-[#fff] rounded mt-8'
        onClick={submit}
      >
        Edit Blog
      </button>
    </form>
  );
};

export default EditBlog;
