import Navbar from "../components/navbar.jsx";
import { fetchGeneral } from "../Api.jsx";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const PokemonDetails = () => {
  const pokemonData = useLoaderData();
  const [selectedAbility, setSelectedAbility] = useState(null);

  const handleClick = async (item) => {
    try {
      const data = await fetchGeneral(item);
      console.log(data);

      setSelectedAbility(data);
    } catch (error) {
      console.error("Error fetching ability data:", error);
    }
  };
  const closeDescription = () => {
    setSelectedAbility(null);
  };

  return (
    <>
      <div className="container">
        <h1 class="text-4xl">{pokemonData.name}</h1>
        <img
          class="w-1/6"
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
        />
        <ul>
          <h1 class="text-2xl">Abilities:</h1>
          <div class="flex gap-5">
            {pokemonData.abilities.map((ability) => (
              <li onClick={() => handleClick(ability.ability.url)}>
                {ability.ability.name}
              </li>
            ))}
          </div>
        </ul>
      </div>
      {selectedAbility && (
        <div className="container">
          <div class="w-4/6">
            <h3 class="font-bold text-2xl underline">{selectedAbility.name}</h3>
            <p>{selectedAbility.effect_entries[1].effect}</p>
            <button
              class="rounded-sm m-6 p-1 bg-red-600"
              onClick={closeDescription}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
