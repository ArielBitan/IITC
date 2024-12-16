import { useState, FormEvent, useEffect } from "react";
import { JoinChat } from "./components/join-chat";
import { ChatRoom } from "./components/chat-room";
import { api } from "./api";
import io from "socket.io-client";

export const socket = io("http://localhost:3000");

export interface Room {
  _id: string;
  name: string;
  users: string[];
}

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [newUser, setNewUser] = useState<string>("");
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room>({
    _id: "",
    name: "",
    users: [],
  });

  const createUser = async () => {
    try {
      console.log(newUser);
      const res = await api.post(`user/${newUser}`);
      setNewUser("");
      console.log(res);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await api.get("room");
      setRooms(response.data);
    };

    fetchRooms();
  }, []);

  async function join(e: FormEvent) {
    e.preventDefault();

    if (username && selectedRoom) {
      try {
        const res = await api.post(`room/${selectedRoom._id}`, { username });
        console.log(username);
        console.log(res.data.userId);
        console.log(selectedRoom._id);
        socket.emit("join", {
          username,
          userId: res.data.userId,
          roomId: selectedRoom._id,
        });
        setIsJoined(true);
      } catch (error) {
        console.error("Login failed:", error);
      }
    } else {
      console.error("Please select a room before joining.");
    }
  }

  const handleRoomSelect = async (room: Room) => {
    setSelectedRoom(room);
    // Emit join only if not already joined
    if (isJoined && selectedRoom._id !== room._id) {
      // Room change, but already joined, so no need to emit again
      return;
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="max-w-2xl text-slate-950 bg-slate-50 p-4 rounded-xl">
        {!isJoined ? (
          <>
            <div className="mb-4">
              <input
                className="border-2 border-slate-950 p-2 rounded-md w-full mb-2"
                type="text"
                placeholder="Enter your username"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
              />
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-xl w-full"
                onClick={createUser}
              >
                Create User
              </button>
            </div>

            <JoinChat
              username={username}
              setUsername={setUsername}
              join={join}
              handleRoomSelect={handleRoomSelect}
              rooms={rooms}
            />
          </>
        ) : (
          <ChatRoom username={username} room={selectedRoom} />
        )}
      </div>

      <ul className="p-10 flex flex-col gap-10">
        {rooms?.map((room: Room) => (
          <li
            key={room._id}
            className={`bg-slate-400 p-4 px-10 rounded-md cursor-pointer ${
              selectedRoom._id === room._id ? "bg-red-500" : ""
            }`}
            onClick={() => handleRoomSelect(room)}
          >
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
