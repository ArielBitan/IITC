import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    allPokemons: [],
    nextPage: "https://pokeapi.co/api/v2/pokemon?limit=20",
  },
  reducers: {
    setPokemons: (state, action) => {
      state.allPokemons = action.payload.pokemons;
      state.nextPage = action.payload.nextPage;
    },
  },
});

export const { setPokemons, addPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
