import Tasks from "./components/Tasks";
import { TasksProvider } from "./components/TasksContext";
import TasksHeader from "./components/TasksHeader";

function App() {
  return (
    <div className="text-center">
      <TasksProvider>
        <TasksHeader />
        <Tasks />
      </TasksProvider>
    </div>
  );
}

export default App;
