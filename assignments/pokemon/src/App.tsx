import React from "react";
import PokemonList from "./components/PokemonList";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pokémon Cards</h1>
      <PokemonList />
    </div>
  );
};

export default App;
