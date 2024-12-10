import FilterItem from "./FilterItem";
import { useTasks } from "./TasksContext";

const TasksFilters = () => {
  const { fetchTasks } = useTasks();
  return (
    <div className="flex gap-4">
      <FilterItem
        filterTasks={fetchTasks}
        filterName="priority"
        options={["Low", "Medium", "High"]}
      />
      <FilterItem
        filterTasks={fetchTasks}
        filterName="status"
        options={["Pending", "In Progress", "Completed"]}
      />
    </div>
  );
};
export default TasksFilters;
