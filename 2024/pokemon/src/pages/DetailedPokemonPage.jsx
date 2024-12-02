import { useSelector } from "react-redux";
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailedPokemonPage = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const { allPokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    const foundPokemon = allPokemons.find(
      (pokemon) => pokemon.name === pokemonName
    );

    if (foundPokemon) {
      setPokemon(foundPokemon);
    } else {
      const fetchPokemonDetails = async () => {
        try {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
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
  }, [pokemonName, allPokemons]);

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

        <ul className="flex space-x-4">
          <li>
            <Link to="stats" className="text-blue-500 hover:underline">
              Stats
            </Link>
          </li>
          <li>
            <Link to="abilities" className="text-blue-500 hover:underline">
              Abilities
            </Link>
          </li>
          <li>
            <Link to="moves" className="text-blue-500 hover:underline">
              Moves
            </Link>
          </li>
        </ul>
        <Outlet context={pokemon} />
      </div>
    </div>
  );
};

export default DetailedPokemonPage;
