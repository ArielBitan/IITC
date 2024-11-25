import axios from "axios";

export async function fetchPokemons() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemons = response.data.results;

    // Fetch detailed pokemon data asynchronously
    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);
        return pokemonData.data;
      })
    );

    // Return the fetched data
    return detailedPokemons;
  } catch (error) {
    throw new Error("Error fetching Pokemon data");
  }
}

export async function fetchSinglePokemon(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data.results;

    return pokemon;
  } catch (error) {
    throw new Error("Error fetching Pokemon data");
  }
}
