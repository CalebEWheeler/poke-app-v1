import React, {useEffect, useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import {faCaretSquareUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import pikaGif from "./Images/dissapointedpika.gif";

function GetPokemon({Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon, showFavoritePokemon, searchValue}) {
    const [toggleGen1, setToggleGen1] = useState(true);
    const [toggleGen2, setToggleGen2] = useState(true);
    const [toggleGen3, setToggleGen3] = useState(true);
    const [toggleGen4, setToggleGen4] = useState(true);
    const [toggleGen5, setToggleGen5] = useState(true);
    const [toggleGen6, setToggleGen6] = useState(true);
    const [toggleGen7, setToggleGen7] = useState(true);
    const [toggleGen8, setToggleGen8] = useState(true);

    let allGens = [Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon];
    let allPokemon = [];
    for (let gen of allGens) {
        for (let pokemon of gen) {
            allPokemon.push(pokemon);
        }
    }

    return (
        <main>
            <h4>All Pokemon</h4>
            <div className={"gen-header-cont"}>
                <div className={toggleGen1 === true ? "gen-header" : "gen-header-hide"} onClick={() => {
                    setToggleGen1(!toggleGen1)
                }}>
                    <h4>Gen 1</h4>
                </div>
                <div className={toggleGen2 === true ? "gen-header" : "gen-header-hide"} onClick={() => {
                    setToggleGen2(!toggleGen2)
                }}>
                    <h4>Gen 2</h4>
                </div>
                <div className={toggleGen3 === true ? "gen-header" : "gen-header-hide"} onClick={() => {
                    setToggleGen3(!toggleGen3)
                }}>
                    <h4>Gen 3</h4>
                </div>
                <div className={toggleGen4 === true ? "gen-header" : "gen-header-hide"} onClick={() => {
                    setToggleGen4(!toggleGen4)
                }}>
                    <h4>Gen 4</h4>
                </div>
                <div className={toggleGen5 === true ? "gen-header" : "gen-header-hide"} onClick={() => {
                    setToggleGen5(!toggleGen5)
                }}>
                    <h4>Gen 5</h4>
                </div>
                <div className={toggleGen6 === true ? "gen-header" : "gen-header-hide"} onClick={() => {
                    setToggleGen6(!toggleGen6)
                }}>
                    <h4>Gen 6</h4>
                </div>
                <div className={toggleGen7 === true ? "gen-header" : "gen-header-hide"} onClick={() => {
                    setToggleGen7(!toggleGen7)
                }}>
                    <h4>Gen 7</h4>
                </div>
                <div className={toggleGen8 === true ? "gen-header" : "gen-header-hide"} onClick={() => {
                    setToggleGen8(!toggleGen8)
                }}>
                    <h4>Gen 8</h4>
                </div>
                <div className={"to-top-cont"}>
                    <FontAwesomeIcon className={"to-top-icon"} onClick={() => {
                        window.scrollTo({top: 0, behavior: 'smooth'})
                    }} icon={faCaretSquareUp} size={"4x"}></FontAwesomeIcon>
                </div>
            </div>
            <section className={toggleGen1 === true ? "show-gen-section" : "hide-gen-section"}>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen1Pokemon, toggleGen1, showFavoritePokemon, searchValue)}
                </div>
            </section>
            <section className={toggleGen2 === true ? "show-gen-section" : "hide-gen-section"}>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen2Pokemon, toggleGen2, showFavoritePokemon, searchValue)}
                </div>
            </section>
            <section className={toggleGen3 === true ? "show-gen-section" : "hide-gen-section"}>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen3Pokemon, toggleGen3, showFavoritePokemon, searchValue)}
                </div>
            </section>
            <section className={toggleGen4 === true ? "show-gen-section" : "hide-gen-section"}>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen4Pokemon, toggleGen4, showFavoritePokemon, searchValue)}
                </div>
            </section>
            <section className={toggleGen5 === true ? "show-gen-section" : "hide-gen-section"}>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen5Pokemon, toggleGen5, showFavoritePokemon, searchValue)}
                </div>
            </section>
            <section className={toggleGen6 === true ? "show-gen-section" : "hide-gen-section"}>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen6Pokemon, toggleGen6, showFavoritePokemon, searchValue)}
                </div>
            </section>
            <section className={toggleGen7 === true ? "show-gen-section" : "hide-gen-section"}>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen7Pokemon, toggleGen7, showFavoritePokemon, searchValue)}
                </div>
            </section>
            <section className={toggleGen8 === true ? "show-gen-section" : "hide-gen-section"}>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen8Pokemon, toggleGen8, showFavoritePokemon, searchValue)}
                </div>
            </section>
            <section className={toggleGen1 === false &&
            toggleGen2 === false &&
            toggleGen3 === false &&
            toggleGen4 === false &&
            toggleGen5 === false &&
            toggleGen6 === false &&
            toggleGen7 === false &&
            toggleGen8 === false ?
                "dissapointed-pika-section" : "hide-gen-section"}>
                <div className={"oh-no-msg-cont"}>
                    <img className={"pika-img"} src={pikaGif} alt="dissapointedPikachu"/>
                    <div className={"oh-no-cont"}>
                        <p className={"oh-no-text"}>Oh no,<br/>it appears<br/>you've hidden<br/>the pokemon...</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GetPokemon;