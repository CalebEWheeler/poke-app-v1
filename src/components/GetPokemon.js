import React, {useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//Create favorite functionality
//deploy with AWS

function GetPokemon({Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon}) {


    return (
        <main>
            <div className={"gen-header"}>
                <h4>Generation 1</h4>
                <div>
                    <FontAwesomeIcon className={"toggle-gen"} icon={faPlusSquare}/>
                </div>
            </div>
            <section className={"grid-container"}>
                {CreatePokeCards(Gen1Pokemon)}
            </section>

            <div className={"gen-header"}>
                <h4>Generation 2</h4>
                <div>
                    <FontAwesomeIcon className={"toggle-gen"} icon={faPlusSquare}/>
                </div>
            </div>
            <section className={"grid-container"}>
                {CreatePokeCards(Gen2Pokemon)}
            </section>

            <div className={"gen-header"}>
                <h4>Generation 3</h4>
                <div>
                    <FontAwesomeIcon className={"toggle-gen"} icon={faPlusSquare}/>
                </div>
            </div>
            <section className={"grid-container"}>
                {CreatePokeCards(Gen3Pokemon)}
            </section>

            <div className={"gen-header"}>
                <h4>Generation 4</h4>
                <div>
                    <FontAwesomeIcon className={"toggle-gen"} icon={faPlusSquare}/>
                </div>
            </div>
            <section className={"grid-container"}>
                {CreatePokeCards(Gen4Pokemon)}
            </section>

            <div className={"gen-header"}>
                <h4>Generation 5</h4>
                <div>
                    <FontAwesomeIcon className={"toggle-gen"} icon={faPlusSquare}/>
                </div>
            </div>
            <section className={"grid-container"}>
                {CreatePokeCards(Gen5Pokemon)}
            </section>

            <div className={"gen-header"}>
                <h4>Generation 6</h4>
                <div>
                    <FontAwesomeIcon className={"toggle-gen"} icon={faPlusSquare}/>
                </div>
            </div>
            <section className={"grid-container"}>
                {CreatePokeCards(Gen6Pokemon)}
            </section>

            <div className={"gen-header"}>
                <h4>Generation 7</h4>
                <div>
                    <FontAwesomeIcon className={"toggle-gen"} icon={faPlusSquare}/>
                </div>
            </div>
            <section className={"grid-container"}>
                {CreatePokeCards(Gen7Pokemon)}
            </section>

            <div className={"gen-header"}>
                <h4>Generation 8</h4>
                <div>
                    <FontAwesomeIcon className={"toggle-gen"} icon={faPlusSquare}/>
                </div>
            </div>
            <section className={"grid-container"}>
                {CreatePokeCards(Gen8Pokemon)}
            </section>
        </main>
    )
}

export default GetPokemon;