import express from "express";
import morgan from "morgan";
import projectsRoutes from "./routes/projectsRoutes.js";

const app = express();

app.use(express.json());

app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.json({ hello: "hello" });
});

app.use("/api/projects", projectsRoutes);

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
