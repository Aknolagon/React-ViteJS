import PropTypes from "prop-types";
import { useState } from "react";

function NavBar (props) {
    const {pokemonList, setPokemonIndex} = props

    return (
        <>
        {pokemonList.map((pokemon, index) => (
          <button key= {index} onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
            ))}
        </>
);
}

export default NavBar;