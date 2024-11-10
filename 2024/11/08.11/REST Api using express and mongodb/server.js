import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import subscribersRoute from "./routes/subscribersRoute.js";
config();

const app = express();
mongoose.connect(process.env.DATABASE_URL);

app.use(express.json());

app.use("/subscribers", subscribersRoute);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("database connected"));

app.listen(3000, () => {
  console.log("server is running");
});
