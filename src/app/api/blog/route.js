import { connectToDB } from "@/database/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
import BlogModel from "../../../models/blogModel";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const GET = async (req, res) => {
  await connectToDB();
  try {
    const allblogs = await BlogModel.find();
    if (allblogs.length === 0) {
      return new NextResponse({
        status: 404,
        error: "No projects found",
      });
    }
    return new NextResponse(JSON.stringify(allblogs), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};

export const POST = async (request, response) => {
  await connectToDB();
  const session = await getServerSession(authOptions);
  try {
    if (!session.user.isAdmin) {
      return new NextResponse({
        status: 403,
        error: "Your not Authorized to this action",
      });
    }
    const data = await request.json();
    let uploadedImageData = "";
    if (data.imageBlog) {
      const fileBuffer = Buffer.from(data.imageBlog, "base64");
      const myCloud = await cloudinary.uploader.upload(fileBuffer, {
        folder: "ashutoshportfolio",
      });
      uploadedImageData = myCloud.secure_url;
    }
    const blogData = {
      ...data,
      imageBlog: uploadedImageData ? uploadedImageData : "",
    };
    const addBlog = await BlogModel.create(blogData);
    return new NextResponse(JSON.stringify(addBlog), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
