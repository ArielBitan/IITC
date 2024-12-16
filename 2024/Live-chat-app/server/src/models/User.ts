import mongoose, { Schema } from "mongoose";

export interface I_UserDocument extends Document {
  username: string;
}

const userSchema: mongoose.Schema<I_UserDocument> = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model<I_UserDocument>("User", userSchema);

export default User;
