import express from "express";
import * as messagesController from "../controllers/messagesController";

const router = express.Router();

// Get all messages from specific room
router.get("/:roomId", messagesController.getAllMessages);

router.post("/", messagesController.createMessage);

export default router;
