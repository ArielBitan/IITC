import React from "react";
import { usePokemon } from "../../Api";

const Home = () => {
  const { pokemonsData, loading, error } = usePokemon();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {pokemonsData.map((pokemon) => (
        <li key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </li>
      ))}
    </ul>
  );
};

export default Home;
