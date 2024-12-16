import mongoose, { Schema, Types } from "mongoose";

interface I_MessageDocument extends Document {
  content: string;
  sender: Types.ObjectId;
  room: Types.ObjectId;
}

const messageSchema: mongoose.Schema<I_MessageDocument> = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
