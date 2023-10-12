import PropTypes from "prop-types";

function PokemonCard(props) {
  
      return(
        <figure>
          {props.pokemon.imgSrc ? (<img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>)
          : (<p>???</p>)}
          <figcaption>{props.pokemon.name}</figcaption>
          </figure>);
  }
  
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.node,
  }).isRequired,
  }



  export default PokemonCard;