import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  image: string;
  type: string;
  power: number;
}

interface PokemonState {
  pokemons: Pokemon[];
  page: number;
  total: number;
}

const initialState: PokemonState = {
  pokemons: [],
  page: 1,
  total: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { setPokemons, setPage, setTotal } = pokemonSlice.actions;

export default pokemonSlice.reducer;
