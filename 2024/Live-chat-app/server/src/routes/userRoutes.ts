import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

// Get all users
router.get("/", userController.getAllUsers);

// Get a single user by username
router.get("/:_id", userController.getUserById);

router.post("/:username", userController.createUser);

export default router;
