import { FormEvent, useState } from "react";
import { api } from "../api";
import { Room } from "../App";
import { socket } from "../App";

interface MessageListProps {
  username: string;
  room: Room;
}

export const AddMessageForm: React.FC<MessageListProps> = ({
  username,
  room,
}) => {
  const [messageInput, setMessageInput] = useState<string>("");

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (messageInput.trim() !== "") {
      await api.post("messages", {
        username,
        roomId: room._id,
        content: messageInput,
      });
      socket.emit("message", messageInput);
      setMessageInput("");
    }
  };

  return (
    <form onSubmit={sendMessage}>
      <input
        required
        className="border-2 border-slate-950 p-2 rounded-md w-full mb-4"
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        className="bg-violet-500 text-white px-6 py-2 rounded-xl w-full uppercase"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
