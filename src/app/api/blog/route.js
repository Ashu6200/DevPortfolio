import { connectToDB } from "@/database/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
import BlogModel from "../../../models/blogModel";
import { uploadToCloudinary } from "@/utils/Cloudinary";

export const GET = async (_req, _res) => {
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

export const POST = async (request, _response) => {
  await connectToDB();
  const session = await getServerSession(authOptions);
  try {
    if (!session.user.isAdmin) {
      return new NextResponse({
        status: 403,
        error: "Your not Authorized to this action",
      });
    }
    const formData = await request.formData();
    const file = formData.get("imageBlog");
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
    const highlights = JSON.parse(formData.get("highlights") || "[]");

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      higlights: highlights,
      imageBlog: url,
    };
    const addBlog = await BlogModel.create(blogData);
    return new NextResponse(JSON.stringify(addBlog), { status: 201 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
