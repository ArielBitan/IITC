import express from "express";
import * as roomController from "../controllers/roomController";

const router = express.Router();

// Get all rooms
router.get("/", roomController.getAllRooms);

// Get room by id
router.get("/:_id", roomController.getRoomById);

// set user in room
router.post("/:_id", roomController.insertUserToRoom);

export default router;
