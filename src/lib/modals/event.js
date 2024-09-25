import mongoose from "mongoose";
const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    date: {
      //includes the time
      type: Date,
    },
    clubName: {
      type: String,
    },
    description: {
      Introduction: {
        type: String,
      },
      Agendas: {
        type: String,
      },
      DetailedPoints: {
        type: String,
      },
      InsightsShared: {
        type: String,
      },
      GroupFindings: {
        type: String,
      },
      KeyTakeaways: {
        type: String,
      },
      FinalThoughts: {
        type: String,
      },
    },
    location: {
      type: String,
    },
    eventImageUrl: {
      type: String,
      default: "https://guwahati.nfsu.ac.in/img/logo.png",
    },
    rsvps: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    attendees: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    eventGalleryImages: {
      type: [
        {
          type: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
