import TasksFilters from "./TasksFilters";

const TasksHeader = () => {
  return (
    <>
      <h1 className="text-4xl p-4">Task App</h1>
      <TasksFilters />
    </>
  );
};

export default TasksHeader;
