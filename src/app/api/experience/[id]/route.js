import ExperienceModel from "@/models/experienceModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/authOptions";
import { connectToDB } from "@/database/db";

export const GET = async (request, { params }) => {
  try {
    const experience = await ExperienceModel.findById(params.id);
    if (!experience) {
      return new NextResponse("Project Not found", { status: 400 });
    }
    return new NextResponse(JSON.stringify(experience), { status: 200 });
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
    const deleteExperience = await ExperienceModel.findByIdAndDelete({
      _id: params.id,
    });
    if (!deleteExperience) {
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
    const body = request.json();
    const editExperience = await ExperienceModel.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true }
    );

    if (!editExperience) {
      return new NextResponse({
        status: 404,
        error: "Blog post not found",
      });
    }
    return new NextResponse(JSON.stringify(editExperience), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
