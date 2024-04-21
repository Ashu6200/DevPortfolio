import { connectToDB } from "@/database/db";
import ProjectModel from "@/models/projectModel";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
import { getServerSession } from "next-auth";

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
      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data.projectImage,
        }
      );
      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image to Cloudinary.");
      }
      uploadedImageData = await uploadResponse.json();
    }
    const projectData = {
      ...data,
      projectImage: uploadedImageData ? uploadedImageData.secure_url : "",
    };
    const addProject = await ProjectModel.create(projectData);
    return new NextResponse(JSON.stringify(addProject), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
