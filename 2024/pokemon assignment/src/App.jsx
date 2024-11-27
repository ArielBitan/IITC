import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import {
  fetchPokemons,
  fetchPokemonsByType,
  fetchSinglePokemon,
} from "./Api.jsx";
import "./App.css";

// Pages
import Home from "./pages/Home.jsx";
import PokemonDetails from "./pages/PokemonDetails.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: fetchPokemons,
      element: <Home />,
    },
    {
      path: "/:id",
      loader: ({ params }) => fetchSinglePokemon(params.id),
      element: <PokemonDetails />,
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
