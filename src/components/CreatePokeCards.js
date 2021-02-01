import React, {useEffect, useState} from "react";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CardInfo from "./CardInfo";
import Types from "./Types";
import Modal from "react-bootstrap/Modal";

const CreatePokeCards = (passedPokemon, toggle) => {
    const [favorites, setFavorites] = useState([]);
    const [showCardModal, setShowCardModal] = useState(false);
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

    // const callback = (showCardModal) => {
    //     setShowCardModal(!showCardModal);
    // }

    // const handleModal = (id, showCardModal) => {
    //     setShowCardModal(!showCardModal);
    // }

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
            // console.log(pokemon);
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
                    if(statName === "hp") stats.push([(statName.toUpperCase()), (stat.base_stat)]);
                    else if(statName.includes("-")) stats.push([((statName.charAt(0).toUpperCase() + statName.substr(1, 7)) + statName.charAt(8).toUpperCase() + statName.substr(9, statName.length)).replace("-", " "), (stat.base_stat)]);
                    else stats.push([(statName.charAt(0).toUpperCase() + statName.substr(1, statName.length)), (stat.base_stat)]);
                }
                console.log(stats)
                return (
                    <div>
                        {stats.map(stat => {
                            return (
                                <div className={""}>
                                    <p className={""}>{stat[0]}</p>
                                    <p className={""}>{stat[1]}</p>
                                </div>

                            )
                        })}
                    </div>
                )
                    // stats;
                // stats.forEach(stat => {
                //     return    (
                //         <div>
                //             <p>{stat[0]}</p>
                //             <p>{stat[1]}</p>
                //         </div>
                //     )
                // })
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

            return (
                <React.Fragment>
                <div className={"grid-item " + toggle} key={index}>
                <div className={"left-card"}>
                    <div className={"dex-entry"}>
                        {modifyId(id)}
                    </div>
                    <div className={"image-radius"} onClick={() => {
                        handleClick(passingId)
                        setShowCardModal(!showCardModal)
                    }}>
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
                    <div className={"typeIcon1"}>
                        {Types(type1)}
                    </div>
                    <div className={"typeIcon2"}>
                        {pokemon.types[1] !== undefined ? (Types(pokemon.types[1].type.name)) : (<div></div>)}
                    </div>
                </div>


                    {/*{showCard === id ?*/}
                    {/*(*/}
                    {/*    pokemon.types[1] !== undefined ? (<CardInfo id={id} height={height} weight={weight} type1={type1} type2={makeType2()}/>) : (<CardInfo id={id} height={height} weight={weight} type1={type1} type2={""}/>)*/}
                    {/*) : (*/}
                    {/*    <div>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                    {/*TODO: test if modal will generate faster if it is in App.js
                            if so, pass pokemon attributes up to
                            App.js to have them be in the modal*/}
                    {showCard === id ? (
                        <Modal
                            // className={props.showCardModal === true ? "true" : "false"}
                            show={showCardModal}
                            onHide={() => {
                                setShowCardModal(!showCardModal)
                                setShowCard(0)
                            }}
                            // dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <div>
                                <div>
                                    <div className={"image-radius"}>
                                        <img src={pokemon.sprites.front_default} alt="pokemon-img"/>
                                    </div>
                                    <div>
                                       <div>
                                           <p>Type</p>
                                           <p>Height</p>
                                           <p>Weight</p>
                                       </div>
                                       <div>
                                           <div>
                                               <div className={"typeIcon1"}>
                                                   {Types(type1)}
                                                   <p>{type1}</p>
                                               </div>
                                               {pokemon.types[1] !== undefined ?
                                                   (<div className={"typeIcon2"}>
                                                       {Types(makeType2())}
                                                       <p>{makeType2()}</p>
                                                   </div>) : (<div className={"typeIcon2"}><div></div></div>)
                                               }
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                <div>
                                    <h6>Stats</h6>
                                    <div>{getStats()}</div>
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


