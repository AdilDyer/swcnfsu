import mongoose from "mongoose";
const ChatMessageSchema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    course: {
      type: String,
    },
    message: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ChatMessage ||
  mongoose.model("ChatMessage", ChatMessageSchema);
