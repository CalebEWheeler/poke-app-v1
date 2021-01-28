import React, {useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusSquare} from "@fortawesome/free-solid-svg-icons";


//Create favorite functionality
//deploy with AWS

function GetPokemon({Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon}) {
    const [toggleGen1, setToggleGen1] = useState(true);
    const [toggleGen2, setToggleGen2] = useState( true);
    const [toggleGen3, setToggleGen3] = useState(true);
    const [toggleGen4, setToggleGen4] = useState(true);
    const [toggleGen5, setToggleGen5] = useState(true);
    const [toggleGen6, setToggleGen6] = useState(true);
    const [toggleGen7, setToggleGen7] = useState(true);
    const [toggleGen8, setToggleGen8] = useState(true);



    return (
        <main>
            <section>
                <div className={"gen-header"}>
                    <h4>Generation 1</h4>
                    <div>
                        <FontAwesomeIcon className={"toggle-gen"} onClick={() => {setToggleGen1(!toggleGen1)}} icon={faPlusSquare}/>
                    </div>
                </div>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen1Pokemon, toggleGen1)}
                </div>
            </section>

            <section>
                <div className={"gen-header"}>
                    <h4>Generation 2</h4>
                    <div>
                        <FontAwesomeIcon className={"toggle-gen"} onClick={() => {setToggleGen2(!toggleGen2)}} icon={faPlusSquare}/>
                    </div>
                </div>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen2Pokemon, toggleGen2)}
                </div>
            </section>

            <section>
                <div className={"gen-header"}>
                    <h4>Generation 3</h4>
                    <div>
                        <FontAwesomeIcon className={"toggle-gen"} onClick={() => {setToggleGen3(!toggleGen3)}} icon={faPlusSquare}/>
                    </div>
                </div>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen3Pokemon, toggleGen3)}
                </div>
            </section>

            <section>
                <div className={"gen-header"}>
                    <h4>Generation 4</h4>
                    <div>
                        <FontAwesomeIcon className={"toggle-gen"} onClick={() => {setToggleGen4(!toggleGen4)}} icon={faPlusSquare}/>
                    </div>
                </div>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen4Pokemon, toggleGen4)}
                </div>
            </section>

            <section>
                <div className={"gen-header"}>
                    <h4>Generation 5</h4>
                    <div>
                        <FontAwesomeIcon className={"toggle-gen"} onClick={() => {setToggleGen5(!toggleGen5)}} icon={faPlusSquare}/>
                    </div>
                </div>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen5Pokemon, toggleGen5)}
                </div>
            </section>

            <section>
                <div className={"gen-header"}>
                    <h4>Generation 6</h4>
                    <div>
                        <FontAwesomeIcon className={"toggle-gen"} onClick={() => {setToggleGen6(!toggleGen6)}} icon={faPlusSquare}/>
                    </div>
                </div>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen6Pokemon, toggleGen6)}
                </div>
            </section>

            <section>
                <div className={"gen-header"}>
                    <h4>Generation 7</h4>
                    <div>
                        <FontAwesomeIcon className={"toggle-gen"} onClick={() => {setToggleGen7(!toggleGen7)}} icon={faPlusSquare}/>
                    </div>
                </div>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen7Pokemon, toggleGen7)}
                </div>
            </section>

            <section>
                <div className={"gen-header"}>
                    <h4>Generation 8</h4>
                    <div>
                        <FontAwesomeIcon className={"toggle-gen"} onClick={() => {setToggleGen8(!toggleGen8)}} icon={faPlusSquare}/>
                    </div>
                </div>
                <div className={"grid-container"}>
                    {CreatePokeCards(Gen8Pokemon, toggleGen8)}
                </div>
            </section>
        </main>
    )
}

export default GetPokemon;