import Tasks from "./components/Tasks";
import { TasksProvider } from "./components/TasksContext";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-4xl p-4">Task App</h1>
      <TasksProvider>
        <Tasks />
      </TasksProvider>
    </div>
  );
}

export default App;
