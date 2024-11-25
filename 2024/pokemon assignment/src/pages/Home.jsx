import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card.jsx";
import Navbar from "../components/navbar.jsx";
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
      <ul class="p-2 rounded-md list-none grid gap-4 list-none grid-cols-5 p-4">
        {pokemonsData.map((pokemon) => (
          <Link
            to={`/${pokemon.id}`}
            aria-label={`View details of ${pokemon.name}`}
          >
            <Card
              key={pokemon.id}
              id={pokemon.id}
              types={pokemon.types.map((type) => type.type.name)}
              name={pokemon.name}
              sprite={pokemon.sprites.front_default}
            />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
