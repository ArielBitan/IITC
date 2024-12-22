const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const postRouter = require("./routes/post-route");
const Post = require("./models/post-model");

dotenv.config();

const PORT = 3000;
const uri = process.env.MONGO_URI;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/posts", postRouter);
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database successfully.");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// async function insertSamplePosts() {
//   try {
//     // Sample posts data
//     const posts = [
//       { title: "Post 1", content: "Content of the first post." },
//       { title: "Post 2", content: "Content of the second post." },
//       { title: "Post 3", content: "Content of the third post." },
//       { title: "Post 4", content: "Content of the fourth post." },
//       { title: "Post 5", content: "Content of the fifth post." },
//       { title: "Post 6", content: "Content of the sixth post." },
//       { title: "Post 7", content: "Content of the seventh post." },
//       { title: "Post 8", content: "Content of the eighth post." },
//       { title: "Post 9", content: "Content of the ninth post." },
//       { title: "Post 10", content: "Content of the tenth post." },
//     ];

//     // Insert posts into the database
//     await Post.insertMany(posts);
//     console.log("10 sample posts inserted successfully");
//     process.exit(0); // Exit the process after completion
//   } catch (error) {
//     console.error("Failed to insert sample posts", error);
//     process.exit(1); // Exit with error code
//   }
// }
