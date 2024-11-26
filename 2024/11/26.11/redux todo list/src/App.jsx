import "./App.css";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <h1>redux to-do list</h1>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
