import { connectToDB } from "@/database/db";
import SuggestionModel from "@/models/suggestionModel";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
import { getServerSession } from "next-auth";

export const GET = async (request) => {
  try {
    await connectToDB();
    const suggestions = await SuggestionModel.find().populate("user");
    if (suggestions.length === 0) {
      return new NextResponse({
        status: 404,
        error: "No Suggestion found",
      });
    }
    return new NextResponse(JSON.stringify(suggestions), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};

export const POST = async (request) => {
  await connectToDB();
  const session = await getServerSession(authOptions);
  try {
    if (!session.user) {
      return new NextResponse({
        status: 500,
        error: "Please login to preform this action",
      });
    }
    const body = await request.json();
    const addSuggestion = await SuggestionModel.create(body);
    return new NextResponse(JSON.stringify(addSuggestion), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, error: error.message });
  }
};
