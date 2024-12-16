import { Request, Response } from "express";
import User from "../models/User";
import Message from "../models/Messages";
import Room from "../models/Room";

export const getAllMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { roomId } = req.params;
    const messages = await Message.find({ room: roomId })
      .populate("sender", "username")
      .limit(10)
      .sort({ createdAt: -1 });

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Error fetching messages" });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { username, content, roomId } = req.body;
    const room = await Room.findById(roomId);
    const user = await User.findOne({ username });
    const newMessage = await Message.create({
      sender: user?._id,
      content,
      room: room?._id,
    });
    res.status(200).json(newMessage);
  } catch (error) {
    res.status(400).json(error);
  }
};
