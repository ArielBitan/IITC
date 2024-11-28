import axios from "axios";

export async function fetchGeneral(api) {
  try {
    const response = await axios.get(api);
    console.log(response);

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
}

export async function fetchPokemons() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=99"
    );
    const pokemons = response.data.results;

    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);
        return pokemonData.data;
      })
    );

    const basePokemons = detailedPokemons.filter((pokemon) => pokemon !== null);

    return basePokemons;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
}

export async function fetchPokemonsByType(type, limit = 100) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    const pokemons = response.data.pokemon.slice(0, limit);

    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon) => {
        const speciesData = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon.name}`
        );

        if (!speciesData.data.evolves_from_species) {
          const pokemonData = await axios.get(pokemon.pokemon.url);
          return pokemonData.data;
        }

        return null;
      })
    );

    return detailedPokemons.filter((pokemon) => pokemon !== null);
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("General error:", error.message);
    }
    throw new Error("Error fetching Pokémon data by type");
  }
}

export async function fetchSinglePokemon(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data;

    return pokemon;
  } catch (error) {
    throw new Error("Error fetching Pokemon data");
  }
}

export async function fetchPokemonSpeciesData(id) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const pokemon = response.data;
    return pokemon;
  } catch (error) {
    throw new Error("Error fetching Pokemon data");
  }
}
