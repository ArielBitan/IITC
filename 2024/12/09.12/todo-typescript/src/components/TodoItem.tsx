export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  description?: string;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <li className="flex gap-4 justify-between mb-4 items-center">
      <span className="flex-1">{`Task: ${todo.text}`}</span>
      <span className="flex-1 ">
        {todo.description
          ? `Description: ${todo.description}`
          : "No description"}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-4"
      />
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 px-3 py-1.5 rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};
