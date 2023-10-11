import PokemonCard from "./components/PokemonCard.jsx"
import React, { useState } from 'react';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const pokemon = pokemonList[1];


  return (
    <>
    <div>
      <PokemonCard pokemon={pokemon}/>
    </div>
    </>
  );
}



export default App;