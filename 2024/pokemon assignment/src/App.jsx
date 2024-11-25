import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import { fetchPokemons, fetchPokemonsByType } from "./Api.jsx";
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
    {
      path: "/data/:type",
      loader: ({ params }) => fetchPokemonsByType(params.type),
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
