// components
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailedPokemonPage from "./pages/DetailedPokemonPage";
import PokemonMovesPage from "./pages/PokemonMovesPage";
import PokemonStatsPage from "./pages/PokemonStatsPage";
import PokemonAbilitiesPage from "./pages/PokemonAbilitiesPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="mt-20">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/:pokemonName" element={<DetailedPokemonPage />}>
            <Route path="stats" element={<PokemonStatsPage />} />
            <Route path="abilities" element={<PokemonAbilitiesPage />} />
            <Route path="moves" element={<PokemonMovesPage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
