import mongoose from "mongoose";

const SuggestionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    suggestionMessage: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const SuggestionModel =
  mongoose.models.suggestion || mongoose.model("suggestion", SuggestionSchema);

export default SuggestionModel;
