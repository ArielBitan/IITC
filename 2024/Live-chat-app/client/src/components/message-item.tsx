import { Room } from "../App";

interface Message {
  content: string;
  sender: { _id: string; username: string };
  room: Room;
}

interface MessageListProps {
  username: string;
  room: Room;
  messages: Message[];
}

export function MessageList({ username, messages }: MessageListProps) {
  return (
    <div className="space-y-1 mb-4">
      {messages.map((message, index) => {
        const isSentByCurrentUser = message.sender.username === username;
        return (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
            } px-2 py-1 rounded-md`}
          >
            <span className="font-bold">
              {isSentByCurrentUser ? "Me" : message.sender.username}
            </span>
            {": "}
            <span>{message.content}</span>
          </div>
        );
      })}
    </div>
  );
}
