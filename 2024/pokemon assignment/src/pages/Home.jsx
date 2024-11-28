import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import PokemonCardModal from "../components/PokemonCardModal.jsx";
const Home = () => {
  // Access the loader data using useLoaderData
  const pokemonsData = useLoaderData();

  // Check for loading or error states (optional if needed)
  if (!pokemonsData) {
    return <p>Loading...</p>; // Or handle the loading state here
  }

  return (
    <>
      <Navbar />
      <ul class="p-2 rounded-md list-none grid gap-4 list-none grid-cols-5 p-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        {pokemonsData.map((pokemon) => (
          <PokemonCardModal pokemonData={pokemon} />
        ))}
      </ul>
    </>
  );
};

export default Home;
