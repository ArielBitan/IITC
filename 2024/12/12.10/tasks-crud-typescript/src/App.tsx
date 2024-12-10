import Tasks from "./components/Tasks";
import { TasksProvider } from "./components/TasksContext";

function App() {
  return (
    <div>
      <h1 className="text-4xl">Task App</h1>
      <TasksProvider>
        <Tasks />
      </TasksProvider>
    </div>
  );
}

export default App;
