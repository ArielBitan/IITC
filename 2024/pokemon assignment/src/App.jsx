import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { usePokemon } from "./Api.jsx"; // Import your loader
import "./App.css";

// Pages
import Home from "./pages/Home/Home.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: usePokemon, // The loader for this route
      element: <Home />, // The component to render
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
