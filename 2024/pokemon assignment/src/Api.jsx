import axios from "axios";

// This loader function is now an async function that returns a promise
export async function usePokemon() {
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
