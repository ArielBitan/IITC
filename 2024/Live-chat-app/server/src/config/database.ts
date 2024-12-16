import mongoose from "mongoose";

export async function connectToDatabase(uri: string) {
  try {
    await mongoose.connect(uri);
    console.log("Connected to database.");
  } catch (error) {
    console.error("Error connecting to database", error);
  }
}
