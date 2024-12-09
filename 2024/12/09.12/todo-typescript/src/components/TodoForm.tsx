import React, { useRef } from "react";
import { Todo } from "./TodoItem";

interface Props {
  addTodo: (newTodo: Todo) => void;
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = titleRef.current!.value.trim();
    const description = descriptionRef.current!.value.trim();

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: title,
      completed: false,
      description: description || undefined,
    };

    addTodo(newTodo);

    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mt-6 w-1/2 items-center"
    >
      <input
        type="text"
        placeholder="Todo Title"
        ref={titleRef}
        className="border border-gray-300 p-2 rounded-lg w-1/4"
        required
      />
      <textarea
        placeholder="Todo Description"
        ref={descriptionRef}
        className="border border-gray-300 p-2 rounded-lg w-3/4"
      />
      <button
        type="submit"
        className="bg-lime-400 mt-4 p-3 rounded-lg hover:bg-lime-500 w-1/3"
      >
        Add Todo
      </button>
    </form>
  );
};
