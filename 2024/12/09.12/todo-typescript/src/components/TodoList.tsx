import React, { useState } from "react";
import { TodoListHeader } from "./TodoListHeader";
import { TodoItems } from "./TodoItems";
import { TodoForm } from "./TodoForm";
import { Todo } from "./TodoItem";

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      text: "Clean dishes",
      completed: false,
      description: "Clean the dishes",
    },
    { id: "2", text: "Do laundry", completed: true, description: "" },
  ]);
  const [filter, setFilter] = useState<string>("allTodos");

  const getFilteredTodos = () => {
    switch (filter) {
      case "completedTodos":
        return todos.filter((todo) => todo.completed);
      case "activeTodos":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <>
      <TodoListHeader
        filter={filter}
        setFilter={setFilter}
        removeAllCompleted={removeAllCompleted}
      />
      <TodoItems
        todos={getFilteredTodos()}
        onToggle={toggleCompleted}
        onDelete={deleteTodo}
      />
      <TodoForm addTodo={addTodo} />
    </>
  );
};
