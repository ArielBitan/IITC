import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="font-bold mb-4 text-5xl p-6">Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
