import PropTypes from "prop-types";

function NavBar (props) {

    return (
        <div>
        {props.pokemonIndex > 0 && <button onClick={props.handleClickPrevious}>Previous</button>
            }
            {props.pokemonIndex < props.pokemon.length - 1 && <button onClick={props.handleClickNext}>Next</button>
            }
        </div>
)   
}


NavBar.propTypes = {
    pokemon : PropTypes.shape({
    pokemonIndex : PropTypes.string.isRequired,
    handleClickPrevious : PropTypes.func.isRequired,
    handleClickNext: PropTypes.func.isRequired,
    }).isRequired,
}

export default NavBar;