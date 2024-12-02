import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    allPokemons: [],
    nextPage: "https://pokeapi.co/api/v2/pokemon?limit=20",
    pageNum: 1,
  },
  reducers: {
    setPokemons: (state, action) => {
      state.allPokemons = action.payload.pokemons;
    },
    setNextPage: (state, action) => {
      state.nextPage = action.payload.nextPage;
    },
    setPageNum: (state, action) => {
      state.pageNum = action.payload.pageNum;
    },
  },
});

export const { setPokemons, setNextPage, setPageNum } = pokemonSlice.actions;

export default pokemonSlice.reducer;
