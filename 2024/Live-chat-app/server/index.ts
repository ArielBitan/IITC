import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./src/config/database";
import userRouter from "./src/routes/userRoutes";
import roomRouter from "./src/routes/roomRoutes";
import messagesRouter from "./src/routes/messagesRoutes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

dotenv.config();

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  message: (data: { sender: string; content: string; roomId: string }) => void;
}

interface ClientToServerEvents {
  join: (username: string, userId: string, roomId: string) => void;
  message: (messageText: string) => void;
  "user-typing-message": () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  userData: object;
}

const PORT = 3000;

const app = express();
const httpServer = createServer(app);

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket: Socket) => {
  console.log("a client connected", socket.id);

  socket.on("join", (userData) => {
    socket.data.user = {
      username: userData.username,
      userId: userData.userId,
      roomId: userData.roomId,
    };
    socket.broadcast.emit("message", {
      sender: "System",
      content: `${socket.data.user.username} has joined the chat`,
      roomId: socket.data.user.roomId,
    });
  });

  // Listen for message event
  socket.on("message", (messageText: string) => {
    io.emit("message", {
      sender: socket.data.user.username,
      content: messageText,
      roomId: socket.data.user.roomId,
    });
  });

  socket.on("user-typing-message", () => {
    socket.broadcast.emit("user-typing-message", socket.data.user.username);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    if (!socket.data.user || !socket.data.user.username) return;
    console.log("a client disconnected", socket.id);
    io.emit("message", {
      sender: "System",
      content: `${socket.data.user.username} has left the chat`,
      roomId: socket.data.user.roomId,
    });
  });
});

// Express middleware setup
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/user", userRouter);
app.use("/room", roomRouter);
app.use("/messages", messagesRouter);

// Database connection and server start
connectToDatabase(process.env.MONGO_URI || "")
  .then(() => {
    httpServer.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
  });
