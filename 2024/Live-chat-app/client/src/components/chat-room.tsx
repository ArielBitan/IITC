import { MessageList } from "./message-item";
import { AddMessageForm } from "./add-message-form";
import { Room } from "../App";
import { useState, useEffect } from "react";
import { api } from "../api";
import { socket } from "../App";

interface Message {
  content: string;
  sender: { _id: string; username: string };
  room: Room;
}

interface ChatRoomProps {
  username: string;
  room: Room;
}

export function ChatRoom({ username, room }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await api.get(`messages/${room._id}`, {
        withCredentials: true,
      });
      setMessages(response.data);
    };

    socket.on("message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    fetchMessages();

    return () => {
      socket.off("message");
    };
  }, [room._id]);

  return (
    <div>
      <div className="text-xl font-bold border-b-2 pb-2 mb-4 flex justify-between">
        <h1>Chat Room</h1>
        <span>{username}</span>
      </div>

      <MessageList username={username} room={room} messages={messages} />

      <AddMessageForm username={username} room={room} />
    </div>
  );
}
