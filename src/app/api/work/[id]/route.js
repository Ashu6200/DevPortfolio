import ProjectModel from "@/models/projectModel";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/authOptions";
import { connectToDB } from "@/database/db";
import { getServerSession } from "next-auth";

export const GET = async (request, { params }) => {
  await connectToDB();
  try {
    const project = await ProjectModel.findById(params.id);
    if (!project) {
      return new NextResponse({
        status: 404,
        error: "Project not found",
      });
    }

    return new NextResponse(JSON.stringify(project), { status: 200 });
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
    const projectPost = await ProjectModel.findByIdAndDelete(params.id);
    if (!projectPost) {
      return new NextResponse({
        status: 404,
        error: "Project post not found",
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
    const body = await request.json();
    const project = await ProjectModel.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true }
    );
    if (!project) {
      return new NextResponse({
        status: 404,
        error: "Project post not found",
      });
    }
    return new NextResponse(JSON.stringify(project), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
