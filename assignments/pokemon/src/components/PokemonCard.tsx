import React from "react";

interface PokemonCardProps {
  name: string;
  image: string;
  type: string;
  power: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  image,
  type,
  power,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Type: {type}</p>
        <p className="text-gray-700 text-base">Power: {power}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
