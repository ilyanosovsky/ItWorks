import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/index";
import { setPokemons } from "../store/slices/pokemonSlice";
import {
  fetchPokemons,
  fetchPokemonDetails,
  PokemonApiResponse,
  PokemonDetails,
} from "../services/api";
import PokemonCard from "./PokemonCard";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);

  useEffect(() => {
    const getPokemons = async () => {
      const data: PokemonApiResponse[] = await fetchPokemons();
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
    };

    getPokemons();
  }, [dispatch]);

  return (
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
  );
};

export default PokemonList;
