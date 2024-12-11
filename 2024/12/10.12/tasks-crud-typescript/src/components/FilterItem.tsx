import React from "react";
import { Task } from "./TasksContext";

interface Props {
  filterTasks: (filterName: keyof Task, filter: string) => void;
  options: string[];
  filterName: keyof Task;
}

const FilterItem: React.FC<Props> = ({ filterTasks, options, filterName }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value;
    filterTasks(filterName, selectedFilter);
  };

  return (
    <select
      name={`filter-${filterName}`}
      className="bg-gray-400 px-3 py-1.5 rounded-lg mb-10"
      onChange={handleFilterChange}
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterItem;
