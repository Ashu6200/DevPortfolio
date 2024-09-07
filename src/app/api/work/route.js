import { connectToDB } from "@/database/db";
import ProjectModel from "@/models/projectModel";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
import { getServerSession } from "next-auth";
import { uploadToCloudinary } from "@/utils/Cloudinary";


export const GET = async (_req, _res) => {
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
export const POST = async (request, _response) => {
  await connectToDB();
  const session = await getServerSession(authOptions);

  try {
    if (!session?.user?.isAdmin) {
      return NextResponse.json(
        { error: "You're not authorized to perform this action" },
        { status: 403 }
      );
    }
    const formData = await request.formData();
    const file = formData.get("projectImage");
    let url;
    if (file) {
      const fileBuffer = await file.arrayBuffer();
      const mimeType = file.type;
      const encoding = "base64";
      const base64Data = Buffer.from(fileBuffer).toString("base64");
      const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
      const uploadResponse = await uploadToCloudinary(fileUri, file.name);
      if (uploadResponse.success) {
        url = uploadResponse.result.secure_url;
      } else {
        throw new Error("Image upload failed");
      }
    }
    const keyPoints = JSON.parse(formData.get("keyPoints") || "[]");
    const projectData = {
      title: formData.get("title"),
      description: formData.get("description"),
      keyPoints: keyPoints,
      projectImage: url,
      githubLink: formData.get("githubLink"),
      liveLink: formData.get("liveLink"),
      technologies: JSON.parse(formData.get("technologies") || "[]"),
      rating: formData.get("rating"),
    }
    const addProject = await ProjectModel.create(projectData);
    return NextResponse.json(addProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
