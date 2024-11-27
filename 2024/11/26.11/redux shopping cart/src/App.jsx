import "./App.css";
import ItemsList from "./components/ItemsList";
import YourCart from "./components/YourCart";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ItemsList />
      <YourCart />
    </div>
  );
}

export default App;
