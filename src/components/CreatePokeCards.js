import React, {useState} from "react";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CreatePokeCards = (passedPokemon, toggle) => {

    const favoritePokemonState = (pokemon) => {
        localStorage.setItem(pokemon.id, JSON.stringify(pokemon))
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
                                         onClick={() => {favoritePokemonState(pokemon)}} />
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


