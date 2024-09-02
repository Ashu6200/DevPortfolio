import { connectToDB } from "@/database/db";
import ProjectModel from "@/models/projectModel";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/authOptions";
import { getServerSession } from "next-auth";
import { cloudinary } from "@/utils/Cloudinary";


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

// export const POST = async (request, response) => {
//   await connectToDB();
//   const session = await getServerSession(authOptions);
//   try {
//     if (!session.user.isAdmin) {
//       return new NextResponse({
//         status: 403,
//         error: "You're not authorized to perform this action",
//       });
//     }
//     const data = await request.json();
//     let uploadedImageData;
//     if (data.projectImage) {
//       const fileBuffer = Buffer.from(data.projectImage, "base64");
//       const result = await cloudinary.uploader.upload(fileBuffer, {
//         invalidate: true,
//       });
//       uploadedImageData = result.secure_url;
//     }
//     const projectData = {
//       ...data,
//       projectImage: uploadedImageData ? uploadedImageData : "",
//     };
//     const addProject = await ProjectModel.create(projectData);
//     return new NextResponse(JSON.stringify(addProject), { status: 200 });
//   } catch (error) {
//     return new NextResponse({ status: 500, error: error.message });
//   }
// };
export const POST = async (request) => {
  await connectToDB();
  const session = await getServerSession(authOptions);

  try {
    if (!session?.user?.isAdmin) {
      return NextResponse.json(
        { error: "You're not authorized to perform this action" },
        { status: 403 }
      );
    }

    const data = await request.json();
    let uploadedImageData = "";

    if (data.projectImage) {
      const fileBuffer = Buffer.from(data.projectImage, "base64");
      const fileUri = "data:image/png;base64," + fileBuffer.toString("base64");

      const result = await cloudinary.uploader.upload(fileUri, {
        invalidate: true,
        resource_type: "auto",
        folder: "ashutoshportfolio",
        use_filename: true,
      });

      uploadedImageData = result.secure_url;
    }

    const projectData = {
      ...data,
      projectImage: uploadedImageData ? uploadedImageData : "",
    };

    const addProject = await ProjectModel.create(projectData);

    return NextResponse.json(addProject, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
