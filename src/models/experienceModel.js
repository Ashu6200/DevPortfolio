import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    index: {
      type: Number,
    },
    year: {
      startDate: Date,
      endDate: mongoose.Schema.Types.Mixed,
    },
    position: {
      type: String,
    },
    institution: {
      type: String,
    },
    description: {
      type: String,
    },
    workType: {
      type: String,
      enum: ["Job", "Student", "Internship"],
    },
    location: {
      type: String,
    },
    locationType: {
      type: String,
      enum: ["Remote", "On-site", "Hybrid", "Day Scholar"],
    },
  },
  {
    timestamps: true,
  }
);

const ExperienceModel =
  mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);

export default ExperienceModel;
