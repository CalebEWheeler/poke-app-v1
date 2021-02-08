import React, {useEffect, useState} from "react";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Types from "./Types";
import Modal from "react-bootstrap/Modal";
import StatChart from "./StatChart";
import modalPokeball from "./Images/pokeball_modal.png"

const CreatePokeCards = (passedPokemon, toggle, showFavoritePokemon, searchValue) => {
    const [favorites, setFavorites] = useState([]);
    const [showCardModal, setShowCardModal] = useState(false);
    const [showCard, setShowCard] = useState(0);
    let favPokeValue = showFavoritePokemon;
    let searchVal = searchValue;

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
        else {
            setShowCard(passingId)
        }
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
            const getStats = () => {
                let stats = [];
                for (let stat of pokemon.stats) {
                    let statName = stat.stat.name;
                    if (statName === "hp") stats.push([(statName.toUpperCase()), (stat.base_stat)]);
                    else if (statName.includes("-")) {
                        if (statName.includes("t")) stats.push([((statName.charAt(0).toUpperCase() + statName.substr(1, 1)) + ". " + statName.charAt(8).toUpperCase() + statName.charAt(9) + statName.charAt(statName.length - 1)).replace("-", " "), (stat.base_stat)]);
                        else stats.push([((statName.charAt(0).toUpperCase() + statName.substr(1, 1)) + ". " + statName.charAt(8).toUpperCase() + statName.charAt(9) + statName.charAt(10)).replace("-", " "), (stat.base_stat)]);
                    } else stats.push([(statName.charAt(0).toUpperCase() + statName.substr(1, statName.length)), (stat.base_stat)]);
                }
                return stats;
            }

            const statsJSX = (stats) => {
                return (
                    <div className={"cont-flex right-card-info"}>
                        <div className={"right-card-inner"}>
                            {stats.slice(0, 3).map(stat => {
                                return (
                                    <div className={"cont-flex stat-block"}>
                                        <h6 className={"card-info-space"}>{stat[0]}</h6>
                                        <h6 className={"card-info-space"}>{stat[1]}</h6>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={"right-card-inner"}>
                            {stats.slice(3, stats.length).map(stat => {
                                return (
                                    <div className={"cont-flex stat-block"}>
                                        <h6 className={"card-info-space"}>{stat[0]}</h6>
                                        <h6 className={"card-info-space"}>{stat[1]}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    )
            }

            let passingId = id;

            //Will cycle through the names and modify them to be displayed correctly
            const modifyName = (name) => {

                let capName = name.charAt(0).toUpperCase() + name.substr(1);
                if(capName.match(/\bNidoran-\b/)) {
                    if(capName.includes("-m")) return capName.replace("-m", " ♂");
                    else return capName.replace("-f", " ♀");
                }
                else if(capName.match(/\bMr-\b/)) {
                    let mimeName = capName.substr(0, 3) + capName.charAt(3).toUpperCase() + capName.substr(4);
                    return mimeName.replace("-", ". ");
                }
                else if(capName.match(/\bTapu-\b/)) return capName;
                else if(capName.includes("-o")) {
                    if(capName.endsWith("-o") || capName.endsWith("-oh")) return capName;
                    else return capName.split("-", 1);
                }
                else if(capName.endsWith("-z") || capName.endsWith("null") || capName.endsWith("-jr")) {
                    if(capName.endsWith("-jr")) return capName.replace("-", " ") + ".";
                    else return capName;
                }
                else if(capName.includes("-")) return capName.split("-", 1);
                else return capName;
            }

            const modifyId = (id) => {
                if(id <= 9) return "#00" + id;
                else if(id >= 10 && id <= 99) return "#0" + id;
                else return "#" + id;
            }

            const modifyWeight = (weight) => {
                let weightKg = weight * .1;
                return (Math.round(weightKg * 2.20462) + "lbs");
            }

            const modifyHeight = (height) => {
                let heightMeters = height * .1;
                let heightFeet = heightMeters * 3.28084
                let decimal = (heightFeet - Math.trunc(heightFeet))
                return ((Math.trunc(heightFeet) + "' ") + (Math.round(decimal * 10) + "\""));
            }

            return (
                <React.Fragment>
                <div className={(favPokeValue === false && searchVal === "" ? "get-grid-item " : "grid-item ") + toggle} key={index}>
                <div className={"left-card"}>
                    <div className={"dex-entry"}>
                        {modifyId(id)}
                    </div>
                    <div className={"image-radius"} onClick={() => {
                        handleClick(passingId)
                        setShowCardModal(!showCardModal)
                    }}>
                        <img src={pokemon.sprites.front_default} alt="pokeImg"/>
                        <div className="poke-info-tooltip">Click here to see more info!</div>
                    </div>
                    <div className={"true name-block"}>
                        {localStorage.getItem(pokemon.id) !== null ?  (
                            <div className={"favorite-cont"}>
                            <FontAwesomeIcon icon={faStar} className={"favorite"} id={pokemon.id}
                                             onClick={() => {
                                                 toggleFavorite(pokemon)
                                             }}/>
                            <div className="favorite-tooltip">Click here to favorite this Pokemon!</div>
                            </div>
                        ) : (
                            <div className={"not-favorite-cont"}>
                            <FontAwesomeIcon icon={faStar} className={"not-favorite"} id={pokemon.id}
                                             onClick={() => {
                                                 toggleFavorite(pokemon)
                                             }}/>
                            <div className="favorite-tooltip">Click here to unfavorite this Pokemon!</div>
                            </div>
                        )}
                        <p>{modifyName(pokemon.name)}</p>
                    </div>
                    <div className={"typeIcon1"}>
                        {Types(type1)}
                    </div>
                    <div className={"typeIcon2"}>
                        {pokemon.types[1] !== undefined ? (Types(pokemon.types[1].type.name)) : (<div></div>)}
                    </div>
                </div>
                    {showCard === id ? (
                        <Modal
                            show={showCardModal}
                            onHide={() => {
                                setShowCardModal(!showCardModal)
                                setShowCard(0)
                            }}
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <div className={"pokemon-card"}>
                                <div className={"left-poke-card"}>
                                    <div className={"cont-flex poke-name-block"}>
                                        <h6>{"No. " + (modifyId(id).substr(1, 3))}</h6>
                                        <div className={"cont-flex"}>
                                            <h5>{modifyName(pokemon.name)}</h5>
                                            <img className={"pokeball-modal"} src={modalPokeball} alt="pokeball"/>
                                        </div>
                                    </div>
                                    <div className={"img-cont"}>
                                        <img className={"pokemon-img"} src={pokemon.sprites.front_default} alt="pokemon-img"/>
                                    </div>
                                    <div className={"left-card-info-cont"}>
                                        <div className={"cont-flex left-card-info"}>
                                       <div className={"cont-flex left-card-attr"}>
                                           <div>
                                               <h6 className={""}>Type</h6>
                                           </div>
                                           <div className={"cont-flex types-cont"}>
                                               <div className={"left-card-attr typeIconModal"}>
                                                   {Types(type1)}
                                                   <h6>{type1.charAt(0).toUpperCase() + type1.substr(1)}</h6>
                                               </div>
                                               {pokemon.types[1] !== undefined ?
                                                   (<div className={"left-card-attr typeIconModal"}>
                                                       {Types(makeType2())}
                                                       <h6 className={""}>{makeType2().charAt(0).toUpperCase() + makeType2().substr(1)}</h6>
                                                   </div>) : (<div className={"typeIcon2"}><div></div></div>)
                                               }
                                           </div>
                                       </div>
                                        <div className={"cont-flex left-card-attr"}>
                                           <div>
                                               <h6 className={""}>Height</h6>
                                           </div>
                                            <div className={"cont-flex types-cont"}>
                                                <h6 className={"hgt-wgt-margin"}>{modifyHeight(height)}</h6>
                                            </div>
                                        </div>
                                        <div className={"cont-flex left-card-attr"}>
                                            <div>
                                                <h6 className={""}>Weight</h6>
                                            </div>
                                            <div className={"cont-flex types-cont"}>
                                                <h6 className={"hgt-wgt-margin"}>{modifyWeight(weight)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={"right-poke-card"}>
                                    <StatChart name={modifyName(pokemon.name)} data={getStats()}/>
                                    <div className={"right-card-info-cont"}>{statsJSX(getStats())}</div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </Modal>
                    ) : (
                        <div></div>
                    )
                    }
                </div>
                </React.Fragment>
            )
        })
    )
}

export default CreatePokeCards;


