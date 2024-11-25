import { useParams } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import { fetchSinglePokemon } from "../Api";
import { useState, useEffect } from "react";

const PokemonData = () => {
  const { id } = useParams(); // Destructure id directly
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const data = await fetchSinglePokemon(id);
        setPokemonData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    getPokemonData();
  }, [id]); // Dependency array ensures effect runs when `id` changes

  return (
    <>
      <Navbar />
      <h1>Hello, {id}</h1>
      {/* Optionally display fetched Pokémon data */}
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprite} alt={pokemonData.name} />
          {/* Add other Pokémon details as needed */}
        </div>
      ) : (
        <p>Loading Pokémon data...</p>
      )}
    </>
  );
};

export default PokemonData;
