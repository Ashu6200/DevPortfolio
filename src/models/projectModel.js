import mongoose from "mongoose";

const KeyPointSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    points: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keyPoints: [KeyPointSchema],
    projectImage: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    liveLink: {
      type: String,
    },
    technologies: [String],
    rating: {
      type: Number
    }
  },
  { timestamps: true }
);

const ProjectModel =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default ProjectModel;
