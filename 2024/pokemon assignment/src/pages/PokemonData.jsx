import { useParams } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import { fetchSinglePokemon } from "../Api";
import { useEffect, useState } from "react";

const PokemonData = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null); // State to store Pokémon data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await fetchSinglePokemon(id);
        setPokemonData(data);
      } catch (err) {
        console.error("Error fetching Pokémon data:", err);
        setError(err.message);
      }
    };

    fetchPokemonData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      {/* Add other Pokémon details as needed */}
    </>
  );
};

export default PokemonData;
