import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { fetchPokemons } from "./Api.jsx";
import "./App.css";

// Pages
import Home from "./pages/Home.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: fetchPokemons,
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
