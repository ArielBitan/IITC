import express from "express";
import { writeFile } from "fs/promises";
import path from "path";

import projects from "../db/projects.json" assert { type: "json" };

const router = express.Router();
const projectsFilePath = path.resolve(
  "C:/IITC/2024/10/CRUD practice using express/db/projects.json"
);

const writeToFile = async (data) => {
  await writeFile(projectsFilePath, JSON.stringify(data, null, 2), "utf-8");
};

router.get(`/`, async (req, res) => {
  res.json(projects);
});

router.get(`/:id`, async (req, res) => {
  const id = +req.params.id;
  const project = projects.find((project) => project.id === id);
  res.json(project);
});

router.post("/", async (req, res) => {
  const { id, name, description, deadline } = req.body;
  const newProject = { id, name, description, deadline };

  projects.push(newProject);

  await writeToFile(projects);
  res.status(201).json({
    message: "New project added",
    project: newProject,
  });
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, deadline } = req.body;
  const newProject = { id: +id, name, description, deadline };

  const index = projects.findIndex((project) => project.id === +id);
  if (index === -1) {
    return res.status(404).json({ message: "Project not found" });
  }

  projects[index] = newProject;
  await writeToFile(projects);

  res.status(200).json({
    message: "Project updated",
    project: newProject,
  });
});

router.delete("/:id", async (req, res) => {
  const id = +req.params.id;
  const index = projects.findIndex((project) => project.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Project not found" });
  }

  const project = projects[index];
  projects.splice(index, 1);

  await writeToFile(projects);
  res.status(200).json({
    message: "Project deleted",
    project: project,
  });
});

export default router;
