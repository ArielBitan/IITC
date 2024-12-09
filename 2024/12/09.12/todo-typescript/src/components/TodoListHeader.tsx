import React from "react";

interface Props {
  filter: string;
  setFilter: (filter: string) => void;
  removeAllCompleted: () => void;
}

export const TodoListHeader: React.FC<Props> = ({
  filter,
  setFilter,
  removeAllCompleted,
}) => {
  return (
    <div className="flex-row">
      <select
        name="filter"
        className="bg-gray-400 px-3 py-1.5 rounded-lg mb-10"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="allTodos">All</option>
        <option value="activeTodos">Active</option>
        <option value="completedTodos">Completed</option>
      </select>
      <button
        onClick={removeAllCompleted}
        className="bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg ml-10"
      >
        Remove Completed
      </button>
    </div>
  );
};
