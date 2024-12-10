import React from "react";
import { Task } from "./Tasks";

interface Props {
  tasks: Task[];
  editTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
}

const TasksList: React.FC<Props> = ({ tasks, editTask, deleteTask }) => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-7 gap-4 font-bold p-2 bg-gray-900 text-white rounded">
        <div>#</div>
        <div>Title</div>
        <div>Description</div>
        <div>Due Date</div>
        <div>Priority</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className="grid grid-cols-7 gap-4 p-2 border-b items-center"
          >
            <div>{index + 1}</div>
            <div>{task.title}</div>
            <div title={task.description}>{task.description}</div>
            <div>{task.dueDate.toString().split("T")[0]}</div>
            <div>{task.priority}</div>
            <div>{task.status}</div>
            <div className="flex gap-2">
              <button
                onClick={() => editTask(task)}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id as string)}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
