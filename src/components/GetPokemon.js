import React, {useEffect, useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusSquare} from "@fortawesome/free-solid-svg-icons";


//Create favorite functionality
//deploy with AWS

function GetPokemon({Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon, showFavoritePokemon, searchValue}) {
    const [toggleGen1, setToggleGen1] = useState(true);
    const [toggleGen2, setToggleGen2] = useState( true);
    const [toggleGen3, setToggleGen3] = useState(true);
    const [toggleGen4, setToggleGen4] = useState(true);
    const [toggleGen5, setToggleGen5] = useState(true);
    const [toggleGen6, setToggleGen6] = useState(true);
    const [toggleGen7, setToggleGen7] = useState(true);
    const [toggleGen8, setToggleGen8] = useState(true);

    let allGens = [Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon];
    let allPokemon = [];
    for (let gen of allGens) {
        for(let pokemon of gen) {
            allPokemon.push(pokemon);
        }
    }

    return (
        <main>
            <div className={"gen-header-cont"}>
                <div className={toggleGen1 === true ? "gen-header" : "gen-header-hide"} onClick={() => {setToggleGen1(!toggleGen1)}}>
                    <h4>Gen 1</h4>
                </div>
                <div className={toggleGen2 === true ? "gen-header" : "gen-header-hide"} onClick={() => {setToggleGen2(!toggleGen2)}}>
                    <h4>Gen 2</h4>
                </div>
                <div className={toggleGen3 === true ? "gen-header" : "gen-header-hide"} onClick={() => {setToggleGen3(!toggleGen3)}}>
                    <h4>Gen 3</h4>
                </div>
                <div className={toggleGen4 === true ? "gen-header" : "gen-header-hide"} onClick={() => {setToggleGen4(!toggleGen4)}}>
                    <h4>Gen 4</h4>
                </div>
                <div className={toggleGen5 === true ? "gen-header" : "gen-header-hide"} onClick={() => {setToggleGen5(!toggleGen5)}}>
                    <h4>Gen 5</h4>
                </div>
                <div className={toggleGen6 === true ? "gen-header" : "gen-header-hide"} onClick={() => {setToggleGen6(!toggleGen6)}}>
                    <h4>Gen 6</h4>
                </div>
                <div className={toggleGen7 === true ? "gen-header" : "gen-header-hide"} onClick={() => {setToggleGen7(!toggleGen7)}}>
                    <h4>Gen 7</h4>
                </div>
                <div className={toggleGen8 === true ? "gen-header" : "gen-header-hide"} onClick={() => {setToggleGen8(!toggleGen8)}}>
                    <h4>Gen 8</h4>
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
        </main>
    )
}

export default GetPokemon;