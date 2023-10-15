import PokemonCard from "./components/PokemonCard.jsx"
import React, { useState } from 'react';
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import { useEffect } from "react";

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
      imgSrc: "",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);


  const pokemon = pokemonList[pokemonIndex];

  useEffect(
    () => {
      alert(`Hello pokemon trainer :)`);
    },
    []
  );
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