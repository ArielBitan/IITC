import { useEffect, useState } from "react";
import { api } from "./api";
import TaskForm from "./components/TaskForm";

type Priority = "Low" | "Medium" | "High";
type Status = "Pending" | "In Progress" | "Completed";

export interface Task {
  id?: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  status: Status;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null); // Track task being edited

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("tasks");
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (newTask: Task) => {
    try {
      const { data } = await api.post("tasks", newTask);
      setTasks((prevTasks) => [...prevTasks, data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleUpdateTask = async (updatedTask: Task) => {
    try {
      const { data } = await api.put(`tasks/${updatedTask.id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...data } : task
        )
      );
      setEditingTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await api.delete(`tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <div>
      <h1 className="text-4xl">Task App</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} className="flex gap-4 p-2">
            <div>{index + 1}</div>
            <div>{`${task.title}:`}</div>
            <div>{task.description}</div>
            <div>{task.dueDate.toString().split("T")[0]}</div>
            <div>{task.priority}</div>
            <div>{task.status}</div>
            <button
              onClick={() => handleEditTask(task)}
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Edit Task
            </button>
            <button
              onClick={() => handleDeleteTask(task.id as string)}
              className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>

      <TaskForm
        addTask={handleAddTask}
        updateTask={handleUpdateTask}
        editingTask={editingTask}
      />
    </div>
  );
}

export default App;
