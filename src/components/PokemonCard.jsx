import PropTypes from "prop-types";
import styles from './PokemonCard.module.css'

function PokemonCard(props) {
  
      return(
        <figure className={styles.card}>
          {props.pokemon.imgSrc ? (<img src={props.pokemon.imgSrc} alt={props.pokemon.name}
          className={styles.cardImg}
          />)
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