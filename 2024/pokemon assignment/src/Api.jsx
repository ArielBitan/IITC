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
        // const speciesData = await axios.get(
        //   `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
        // );

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
    console.log(pokemon);
    return pokemon;
  } catch (error) {
    throw new Error("Error fetching Pokemon data");
  }
}
