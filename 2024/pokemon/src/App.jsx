import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailedPokemonPage from "./pages/DetailedPokemonPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/pokemon/:id" element={<DetailedPokemonPage />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
