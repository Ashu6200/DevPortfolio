import ExperienceModel from "@/models/experienceModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/authOptions";
import { connectToDB } from "@/database/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await connectToDB();
  try {
    const allExperience = await ExperienceModel.find();
    if (allExperience.length === 0) {
      return new NextResponse({
        status: 404,
        error: "No projects found",
      });
    }
    return new NextResponse(JSON.stringify(allExperience), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};

export const POST = async (req, res) => {
  await connectToDB();
  const session = await getServerSession(authOptions);
  try {
    if (!session.user.isAdmin) {
      return new NextResponse({
        status: 403,
        error: "Your not Authorized to this action",
      });
    }
    const data = await req.json();
    const addExperience = await ExperienceModel.create(data);
    return new NextResponse(JSON.stringify(addExperience), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
