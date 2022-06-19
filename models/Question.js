import mongoose from "mongoose";
const { Schema } = mongoose;

const QuestionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    question: {
      type: String,
      require: true,
    },
    answer: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Question", QuestionSchema);
