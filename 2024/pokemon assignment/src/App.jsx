import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home/Home.jsx";

// Components
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
