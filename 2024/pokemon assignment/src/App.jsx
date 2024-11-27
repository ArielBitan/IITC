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
