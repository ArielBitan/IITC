import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailedPokemonPage from "./pages/DetailedPokemonPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/pokemon/:id" element={<DetailedPokemonPage />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
