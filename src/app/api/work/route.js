import { connectToDB } from "@/database/db";
import ProjectModel from "@/models/projectModel";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
import { getServerSession } from "next-auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const GET = async (req, res) => {
  await connectToDB();
  try {
    const allProjects = await ProjectModel.find();
    if (allProjects.length === 0) {
      return new NextResponse({
        status: 404,
        error: "No projects found",
      });
    }
    return new NextResponse(JSON.stringify(allProjects), { status: 200 });
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
        error: "You're not authorized to perform this action",
      });
    }
    const data = await request.json();
    let uploadedImageData;
    if (data.projectImage) {
      const fileBuffer = Buffer.from(data.projectImage, "base64");
      const result = await cloudinary.uploader.upload(fileBuffer, {
        invalidate: true,
      });
      uploadedImageData = result.secure_url;
    }
    const projectData = {
      ...data,
      projectImage: uploadedImageData ? uploadedImageData : "",
    };
    const addProject = await ProjectModel.create(projectData);
    return new NextResponse(JSON.stringify(addProject), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
