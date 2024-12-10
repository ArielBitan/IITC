import { useState, useEffect } from "react";
import { Task } from "./Tasks";

interface Props {
  addTask: (newTask: Task) => void;
  updateTask: (updatedTask: Task) => void;
  editingTask: Task | null;
}

const TaskForm: React.FC<Props> = ({ addTask, updateTask, editingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    status: "pending",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        dueDate: editingTask.dueDate.toString().split("T")[0],
        priority: editingTask.priority,
        status: editingTask.status,
      });
    }
  }, [editingTask]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, dueDate, priority, status } = formData;
    const newTask: Task = {
      title: title.trim(),
      description: description.trim(),
      dueDate: new Date(dueDate),
      priority: priority as Task["priority"],
      status: status as Task["status"],
    };

    if (editingTask) {
      newTask.id = editingTask.id;
      updateTask(newTask);
    } else {
      addTask(newTask);
    }

    setFormData({
      title: "",
      description: "",
      dueDate: "",
      priority: "low",
      status: "pending",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-md max-w-xl mx-auto"
    >
      <input
        className="border border-gray-300 rounded-lg p-3 focus:ring-2"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        className="border border-gray-300 rounded-lg p-3 h-24 focus:ring-2"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        className="border border-gray-300 rounded-lg p-3 "
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <select
          className="border border-gray-300 rounded-lg p-3"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select
          className="border border-gray-300 rounded-lg p-3"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-500 w-full"
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
