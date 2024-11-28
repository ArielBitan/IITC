import { fetchGeneral, fetchSinglePokemon } from "../Api.jsx";
import { useState, useEffect } from "react";

const PokemonDetails = (props) => {
  const [pokemonData, setPokemonData] = useState("");
  const [selectedAbility, setSelectedAbility] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await fetchSinglePokemon(props.name);
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, [props.name]);

  const handleClick = async (item) => {
    try {
      const data = await fetchGeneral(item);
      setSelectedAbility(data);
    } catch (error) {
      console.error("Error fetching ability data:", error);
    }
  };

  const closeDescription = () => {
    setSelectedAbility(null);
  };

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <h1 className="text-4xl">
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </h1>
        <img
          className="w-3/6"
          src={pokemonData.sprites.front_default}
          alt={props.name}
        />
        <ul>
          <h1 className="text-2xl">Abilities:</h1>
          <div className="flex gap-5">
            {pokemonData.abilities.map((ability) => (
              <li
                className="hover:underline hover:cursor-pointer"
                key={ability.ability.name}
                onClick={() => handleClick(ability.ability.url)}
              >
                {ability.ability.name}
              </li>
            ))}
          </div>
        </ul>
      </div>
      {selectedAbility && (
        <div className="container">
          <div>
            <h3 className="font-bold text-2xl underline">
              {selectedAbility.name}
            </h3>
            <p>{selectedAbility.effect_entries[1]?.effect}</p>
            <button
              className="rounded-sm m-6 p-1 bg-red-600"
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
