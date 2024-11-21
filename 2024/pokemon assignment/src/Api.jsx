import { useState, useEffect } from "react";
import axios from "axios";

const usePokemon = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const pokemons = response.data.results;

        const detailedPokemons = await Promise.all(
          pokemons.map(async (pokemon) => {
            const pokemonData = await axios.get(pokemon.url);
            return pokemonData.data;
          })
        );

        setPokemonsData(detailedPokemons);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemonsData, loading, error };
};

export { usePokemon };
