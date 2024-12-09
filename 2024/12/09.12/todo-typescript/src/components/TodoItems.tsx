import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItems: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="p-4 bg-gray-100 rounded shadow-lg">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
