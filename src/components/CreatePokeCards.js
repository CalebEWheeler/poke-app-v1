import React, {useEffect, useState} from "react";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CardInfo from "./CardInfo";

const CreatePokeCards = (passedPokemon, toggle) => {
    const [favorites, setFavorites] = useState([]);
    const [showCard, setShowCard] = useState(0);

    const toggleFavorite = (pokemon) => {
        setFavorites([]);
            if(localStorage.getItem(pokemon.id) === null) {
                localStorage.setItem(pokemon.id, JSON.stringify(pokemon));
            }
            else {
                localStorage.removeItem(pokemon.id)
            }
        Object.keys(localStorage).forEach((key) => {
            setFavorites([...favorites, JSON.parse(localStorage.getItem(key))])
        })
    }

    const  handleClick = (passingId) => {
        if(showCard === passingId) {
            setShowCard(0)
        }
        else setShowCard(passingId)
    }

    useEffect(() => {
        console.log(showCard)
    }, [showCard])

    return (
        passedPokemon.map((pokemon, index) => {
            let id = pokemon.id;
            let height = pokemon.height;
            let weight = pokemon.weight;
            let type1 = pokemon.types[0].type.name;
            const makeType2 = () => {
                return pokemon.types[1].type.name;
            }
            let passingId = id;
            const modifyName = (name) => {
                let capName = name.charAt(0).toUpperCase() + name.substr(1);
                if(capName.includes("-m")) return capName.replace("-m ", " ♂")
                else if(capName.includes("-f")) return capName.replace("-f ", " ♀")
                else if(capName.includes("-")) return capName.split("-", 1);
                else return capName;
            }

            return (
                <div className={"grid-item " + toggle} key={index}>
                <div className={"left-card"}>
                    <div className={"image-radius"} onClick={() => {handleClick(passingId)}}>

                        <img src={pokemon.sprites.front_default} alt="pokeImg"/>
                    </div>
                    <div className={"true name-block"}>
                        {localStorage.getItem(pokemon.id) !== null ?  (
                            <FontAwesomeIcon icon={faStar} className={"favorite"} id={pokemon.id}
                                             onClick={() => {
                                                 toggleFavorite(pokemon)
                                             }}/>
                        ) : (
                            <FontAwesomeIcon icon={faStar} className={"not-favorite"} id={pokemon.id}
                                             onClick={() => {
                                                 toggleFavorite(pokemon)
                                             }}/>
                        )}
                        <p>{modifyName(pokemon.name)}</p>
                    </div>
                </div>
                {showCard === id ?
                    (
                        pokemon.types[1] !== undefined ? (<CardInfo id={id} height={height} weight={weight} type1={type1} type2={makeType2()}/>) : (<CardInfo id={id} height={height} weight={weight} type1={type1} type2={""}/>)
                    ) : (
                        <div>
                        </div>
                    )}

                </div>
            )
        })
    )
}

export default CreatePokeCards;


