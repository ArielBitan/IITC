import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailedPokemonPage = () => {
  const { id } = useParams();
  const pokemonId = Number(id);
  const [pokemon, setPokemon] = useState(null);
  const { allPokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    const foundPokemon = allPokemons.find(
      (pokemon) => pokemon.id === pokemonId
    );
    if (foundPokemon) {
      setPokemon(foundPokemon);
    } else {
      const fetchPokemonDetails = async () => {
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await res.json();

          const detailedPokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
            types: data.types.map((type) => type.type.name),
            height: data.height,
            weight: data.weight,
            stats: data.stats.map((stat) => ({
              name: stat.stat.name,
              base_stat: stat.base_stat,
            })),
            abilities: data.abilities.map((ability) => ({
              name: ability.ability.name,
            })),
            moves: data.moves.map((move) => ({
              name: move.move.name,
            })),
          };

          setPokemon(detailedPokemon);
        } catch (error) {
          console.error("Failed to fetch Pokemon details", error);
        }
      };

      fetchPokemonDetails();
    }
  }, [id, allPokemons]);

  if (!pokemon) {
    return <div className="text-center p-10 text-xl">Pokémon not found</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <div className="flex items-center justify-between mb-8">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-48 h-48 object-contain"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-blue-600">{pokemon.name}</h1>
            <small className="text-sm text-gray-500">#{pokemon.id}</small>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">General Info</h2>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-lg">
                <span className="font-bold">Height: </span>
                {pokemon.height / 10} m
              </p>
              <p className="text-lg">
                <span className="font-bold">Weight: </span>
                {pokemon.weight / 10} kg
              </p>
            </div>
            <div>
              <p className="text-lg">
                <span className="font-bold">Type: </span>
                {pokemon.types.join(", ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Abilities</h2>
          <ul className="mt-4 space-y-2">
            {pokemon.abilities.map((ability, index) => (
              <li key={index} className="text-lg">
                <span>{ability.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Stats</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {pokemon.stats.map((stat) => (
              <div key={stat.name} className="flex justify-between">
                <span className="text-lg font-bold">{stat.name}</span>
                <span className="text-lg">{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Moves</h2>
          <ul className="mt-4 space-y-2">
            {pokemon.moves.slice(0, 10).map((move, index) => (
              <li key={index} className="text-lg">
                <span>{move.name}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-2">...and many more moves</p>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedPokemonPage;
