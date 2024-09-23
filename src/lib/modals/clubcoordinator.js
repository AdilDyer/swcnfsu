import mongoose from "mongoose";

const ClubCoordinatorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    clubId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
  },
  { timestamps: true }
);

export default mongoose.models.ClubCoordinator ||
  mongoose.model("ClubCoordinator", ClubCoordinatorSchema);
