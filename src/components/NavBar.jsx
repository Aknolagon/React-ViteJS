function NavBar ({pokemonList, setPokemonIndex}) {

    return (
        <>
        {pokemonList.map((pokemon, index) => pokemon.name === `pikachu` ? 
        (<button key={index} onClick={() => {setPokemonIndex(index); alert("pika pikachu !!!");}}  > {pokemon.name} </button>
        ) : (<button key= {index} onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
            )
            )}
        </>
);
        }

export default NavBar;