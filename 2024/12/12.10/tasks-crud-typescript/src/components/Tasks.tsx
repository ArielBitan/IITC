import { useEffect, useState } from "react";
import { useTasks } from "./TasksContext";
import { api } from "../api";

import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

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

const Tasks = () => {
  const { tasks, addTask, deleteTask, updateTask, fetchTasks } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <>
      <TasksList
        tasks={tasks}
        editTask={handleEditTask}
        deleteTask={deleteTask}
      />
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        editingTask={editingTask}
      />
    </>
  );
};

export default Tasks;
