import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { fetchPokemons } from "./Api.jsx";
import "./App.css";

// Pages
import Home from "./pages/Home.jsx";
import PokemonData from "./pages/PokemonData.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: fetchPokemons,
      element: <Home />,
    },
    {
      path: "/:id",
      element: <PokemonData />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
