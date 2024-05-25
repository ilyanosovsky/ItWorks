import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/index";
import { setPokemons, setPage, setTotal } from "../store/slices/pokemonSlice";
import {
  fetchPokemons,
  fetchPokemonDetails,
  PokemonApiResponse,
  PokemonDetails,
} from "../services/api";
import PokemonCard from "./PokemonCard";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pokemons, page, total } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    const getPokemons = async () => {
      const offset = (page - 1) * 20;
      const data: PokemonApiResponse[] = await fetchPokemons(offset);
      const details: PokemonDetails[] = await Promise.all(
        data.map((pokemon: PokemonApiResponse) =>
          fetchPokemonDetails(pokemon.url)
        )
      );
      dispatch(
        setPokemons(
          details.map((pokemon: PokemonDetails) => ({
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            type: pokemon.types[0].type.name,
            power: pokemon.stats[0].base_stat,
          }))
        )
      );
      dispatch(setTotal(1000));
    };

    getPokemons();
  }, [dispatch, page]);

  const handleNextPage = () => {
    if (page < Math.ceil(total / 20)) {
      dispatch(setPage(page + 1));
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
            power={pokemon.power}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          onClick={handleNextPage}
          disabled={page === Math.ceil(total / 20)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
