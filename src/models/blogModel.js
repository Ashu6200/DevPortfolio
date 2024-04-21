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

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    higlights: [KeyPointSchema],
    imageBlog: { type: String },
  },
  { timestamps: true }
);

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default BlogModel;
