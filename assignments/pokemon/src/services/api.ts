import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export interface PokemonApiResponse {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
  }[];
}

export const fetchPokemons = async (
  offset: number,
  limit: number = 20
): Promise<PokemonApiResponse[]> => {
  const response = await axios.get<{ results: PokemonApiResponse[] }>(
    `${API_URL}?offset=${offset}&limit=${limit}`
  );
  return response.data.results;
};

export const fetchPokemonDetails = async (
  url: string
): Promise<PokemonDetails> => {
  const response = await axios.get<PokemonDetails>(url);
  return response.data;
};
