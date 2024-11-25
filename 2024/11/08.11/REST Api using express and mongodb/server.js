import mongoose from "mongoose";
import express from "express";
import subscribersRoute from "./routes/subscribersRoute.js";

const app = express();
app.use(express.json());

app.use("/subscribers", subscribersRoute);
// Database
const database = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  rIyBXOMHVkfaQE8Q;
  try {
    mongoose.connect(
      "mongodb+srv://bitan502:@cluster0.sxdfb.mongodb.net/",
      connectionParams
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
};

database();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
