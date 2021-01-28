import React from "react";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CreatePokeCards = (passedPokemon, toggle) => {
    const saveFavoritePokemon = () => {

    }

    return (
        passedPokemon.map((pokemon, index) => {
            let type2;
            if (pokemon.types[1] !== undefined) {
                type2 = <div className={pokemon.types[1].type.name}>
                    {pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.substr(1)}
                </div>
            }
            return <div className={"grid-item " + toggle} key={index}>
                <div className={"left-card"}>
                    <div className={"image-radius"}>
                        <FontAwesomeIcon icon={faStar} size={"2x"}
                                         onClick={() => {

                                             //take in the default state value
                                             //change color if favorited
                                             //pass "this" pokemon to be stored in the Favorite state
                                         }} />
                        <img src={pokemon.sprites.front_default} alt="pokeImg"/>
                    </div>
                    <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1)}</p>
                </div>
                <div className={"right-card"}>
                    <p>Dex Entry: {pokemon.id}</p>
                    <p>Height: {pokemon.height}"</p>
                    <p>Weight: {pokemon.weight}lbs</p>
                    <div>
                        <p>Type:</p>
                        <div>
                            <div className={pokemon.types[0].type.name}>
                                {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.substr(1)}
                            </div>
                            {type2}
                        </div>
                    </div>
                </div>
            </div>
        })
    )
}

export default CreatePokeCards;


