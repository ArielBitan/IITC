import { Request, Response } from "express";
import Room from "../models/Room";
import User from "../models/User";

// Get all rooms
export const getAllRooms = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Error fetching rooms" });
  }
};

// Get a single room by ID
export const getRoomById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { _id } = req.params;
    const room = await Room.findById(_id);

    if (!room) {
      res.status(404).json({ message: "Room not found" });
      return;
    }

    res.status(200).json(room);
  } catch (error) {
    console.error("Error fetching room by ID:", error);
    res.status(500).json({ message: "Error fetching room" });
  }
};

export const insertUserToRoom = async (req: Request, res: Response) => {
  const { username } = req.body;
  const { _id } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const room = await Room.findById(_id);
    if (!room) {
      res.status(404).json({ message: "Room not found" });
      return;
    }

    if (room.users.includes(user._id)) {
      res
        .status(200)
        .json({ message: "User is already in the room", userId: user._id });
      return;
    }
    room.users.push(user._id);
    await room.save();

    res.status(200).json({ message: "User added to room", userId: user._id });
  } catch (error) {
    console.error("Error adding user to room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
