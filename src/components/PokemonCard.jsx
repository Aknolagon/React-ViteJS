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

function PokemonCard() {
  const [pokemon, pokemon1] = useState(pokemonList[0]);

  function nextPokemon() {
   pokemon1(pokemonList[1]);
  } 

    return(
      <figure>
        {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>)
        : (<p>???</p>)}
        <figcaption>{pokemon.name}</figcaption>
        <button onClick={nextPokemon}>next pokemon</button>
        </figure>);
}
  
  export default PokemonCard;