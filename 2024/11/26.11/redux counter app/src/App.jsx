import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { increment, decrement, reset } from "./store/storeActions.js";

function App() {
  const counterValue = useSelector((state) => state.value);
  const dispatch = useDispatch();
  console.log(counterValue);

  return (
    <>
      <div style={{ marginBottom: "2rem", fontSize: "2rem" }}>Counter App</div>
      <div style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>
        {counterValue}
      </div>
      <button
        style={{ marginRight: "2rem" }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{ marginTop: "2rem", display: "block" }}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
