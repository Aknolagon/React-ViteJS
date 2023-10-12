import PokemonCard from "./components/PokemonCard.jsx"
import React, { useState } from 'react';
import NavBar from "./components/NavBar.jsx";
import PropTypes from "prop-types";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);


  const pokemon = pokemonList[pokemonIndex];

  return (
    <>
      <PokemonCard pokemon={pokemon}/>    
      <NavBar 
      setPokemonIndex={setPokemonIndex}
      pokemonList={pokemonList}
      />
    </>
  );
}

export default App;