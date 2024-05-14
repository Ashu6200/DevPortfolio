import BlogModel from "@/models/blogModel";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/authOptions";
import { connectToDB } from "@/database/db";
import { getServerSession } from "next-auth";

export const GET = async (request, { params }) => {
  try {
    const blog = await BlogModel.findById(params.id);
    if (!blog) {
      return new NextResponse("Project Not found", { status: 400 });
    }
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
export const DELETE = async (request, { params }) => {
  await connectToDB();
  const session = await getServerSession(authOptions);
  try {
    if (!session.user.isAdmin) {
      return new NextResponse({
        status: 500,
        error: "Your not Authorized to this action",
      });
    }
    const blogPost = await BlogModel.findByIdAndDelete({ _id: params.id });
    if (!blogPost) {
      return new NextResponse({
        status: 404,
        error: "Blog post not found",
      });
    }
    return new NextResponse("Deleted Succesfully", { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
export const PUT = async (request, { params }) => {
  await connectToDB();
  const session = await getServerSession(authOptions);
  try {
    if (!session.user.isAdmin) {
      return new NextResponse({
        status: 500,
        error: "Your not Authorized to this action",
      });
    }
    const data = request.body;
    let uploadedImageData;
    if (data.projectImage) {
      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data.projectImage,
        }
      );
      uploadedImageData = await uploadResponse.json();
    }
    const blogData = {
      ...data,
      imageBlog: uploadedImageData ? uploadedImageData.secure_url : "",
    };
    const blog = await BlogModel.findByIdAndUpdate(
      params.id,
      { $set: blogData },
      { new: true }
    );

    if (!blog) {
      return new NextResponse({
        status: 404,
        error: "Blog post not found",
      });
    }
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
