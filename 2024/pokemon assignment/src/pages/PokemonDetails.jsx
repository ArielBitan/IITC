import { fetchGeneral, fetchSinglePokemon } from "../Api.jsx";
import { useState, useEffect } from "react";
import PokemonType from "../components/PokemonType.jsx";

const PokemonDetails = (props) => {
  const [pokemonData, setPokemonData] = useState("");
  const [selectedAbility, setSelectedAbility] = useState(null);

  const spanStyle =
    "px-2 py-0.5 mr-2 rounded-full opacity-90 hover:opacity-100";
  const colors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

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
        <h1 class="text-4xl">
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </h1>
        <img
          class="w-3/6"
          src={pokemonData.sprites.front_default}
          alt={props.name}
        />
        <ul class="w-full">
          <div class="flex justify-end">
            {props.types.map((element, index) => (
              <PokemonType
                element={element}
                key={index}
                className={spanStyle}
                style={{ backgroundColor: colors[element] }}
              />
            ))}
          </div>
          <h1 className="text-2xl">Abilities:</h1>
          <div className="flex gap-5">
            {pokemonData.abilities.map((ability) => (
              <li
                className="hover:underline hover:cursor-pointer"
                key={ability.ability.name}
                onClick={() => handleClick(ability.ability.url)}
              >
                {ability.ability.name.charAt(0).toUpperCase() +
                  ability.ability.name.slice(1)}
              </li>
            ))}
          </div>
        </ul>
      </div>
      {selectedAbility && (
        <div className="container">
          <div>
            <h3 className="font-bold text-2xl underline">
              {selectedAbility.name.charAt(0).toUpperCase() +
                selectedAbility.name.slice(1)}
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
