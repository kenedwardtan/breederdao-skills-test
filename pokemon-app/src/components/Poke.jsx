import React from 'react';
import { useQuery } from '@apollo/client';
import { singlePoke } from '../graphql/getSinglePokemon';

const Poke = ({ name }) => {
  const { data } = useQuery(singlePoke, {
    variables: {
      name,
    },
  });

  const pokemon = data?.pokemon;
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const {
    image,
    name: pokemonName,
    number,
    classification,
    types,
    height,
    weight,
  } = pokemon;

  return (
    <div className="w-[300px] md:w-[400px] border border-gray-300 p-4 m-2 gap-4 mb-4 flex justify-center items-center">
      <div className="flex-shrink-0 mr-4">
        <img src={image} alt={pokemonName} className="w-28 h-28"/>
      </div>

      <div>
        <p className="font-bold text-lg">{`# ${number}`}</p>
        <p className="text-2xl font-semibold mb-2">{pokemonName}</p>
        <p className="">{`Classification: ${classification}`}</p>
        <p className="">{`Types: ${types}`}</p>
        <p className="">{`Height: ${height.minimum} - ${height.maximum}`}</p>
        <p className="">{`Weight: ${weight.minimum} - ${weight.maximum}`}</p>
      </div>
    </div>
  );
};

export default Poke;