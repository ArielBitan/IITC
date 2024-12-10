import React, { createContext, useContext, useState } from "react";
import { api } from "../api";

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

interface TasksContextType {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (taskId: string) => void;
  fetchTasks: () => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const TasksProvider = ({ children }: AuthProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("tasks");
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (newTask: Task) => {
    try {
      const { data } = await api.post("tasks", newTask);
      setTasks((prevTasks) => [...prevTasks, data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const updateTask = async (updatedTask: Task) => {
    try {
      const { data } = await api.put(`tasks/${updatedTask.id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...data } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      await api.delete(`tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, fetchTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
