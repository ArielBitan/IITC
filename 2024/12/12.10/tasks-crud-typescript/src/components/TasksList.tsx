import React from "react";
import { Task } from "./Tasks";

interface Props {
  tasks: Task[];
  editTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
}

const TasksList: React.FC<Props> = ({ tasks, editTask, deleteTask }) => {
  return (
    <ul className="my-4">
      {tasks.map((task, index) => (
        <li key={task.id} className="flex gap-4 p-2">
          <div>{index + 1}</div>
          <div>{`${task.title}:`}</div>
          <div>{task.description}</div>
          <div>{task.dueDate.toString().split("T")[0]}</div>
          <div>{task.priority}</div>
          <div>{task.status}</div>
          <button
            onClick={() => editTask(task)}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Edit Task
          </button>
          <button
            onClick={() => deleteTask(task.id as string)}
            className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
          >
            Delete Task
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
