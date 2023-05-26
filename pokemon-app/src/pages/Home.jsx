import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { pokemonData } from '../graphql/pokemonData';
import PokemonRow from '../components/Prob2';

const home = () => {
    const [
        pokemon1,
        pokemon2,
        pokemon3,
        pokemon4,
        pokemon5,
        pokemon6,
        pokemon7,
        pokemon8,
        pokemon9,
        pokemon10,
    ] = pokemonData;

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Header />
        
            <div className="flex flex-col items-center overflow-scroll">
                <PokemonRow name1={pokemon1} name2={pokemon2} />
                <PokemonRow name1={pokemon3} name2={pokemon4} />
                <PokemonRow name1={pokemon5} name2={pokemon6} />
                <PokemonRow name1={pokemon7} name2={pokemon8} />
                <PokemonRow name1={pokemon9} name2={pokemon10} />
            </div>

            <Footer />
        </div>
  );
};

export default home;
