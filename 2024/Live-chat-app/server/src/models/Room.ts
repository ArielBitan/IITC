import mongoose, { Schema, Types } from "mongoose";

interface I_RoomDocument extends Document {
  name: string;
  users: Types.ObjectId[];
}

const roomSchema: mongoose.Schema<I_RoomDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Room = mongoose.model<I_RoomDocument>("Room", roomSchema);

export default Room;
