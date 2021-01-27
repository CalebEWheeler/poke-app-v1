import React, {useState, useEffect, useRef} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import useLoader from "./Hooks/useLoader";
//TODO: refactor to only have method that gets all pokemon

//Create loading icon
//Create search functionality
//Create favorite functionality
//deploy with AWS

function GetPokemon({Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon}) {
    const [error, setError] = useState(null);
    const [loader, showLoader, hideLoader] = useLoader();

        return (
            <main>
                {loader}
                <h4>Generation 1</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(Gen1Pokemon)}
                </section>
                <h4>Generation 2</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(Gen2Pokemon)}
                </section>
                <h4>Generation 3</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(Gen3Pokemon)}
                </section>
                <h4>Generation 4</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(Gen4Pokemon)}
                </section>
                <h4>Generation 5</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(Gen5Pokemon)}
                </section>
                <h4>Generation 6</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(Gen6Pokemon)}
                </section>
                <h4>Generation 7</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(Gen7Pokemon)}
                </section>
                <h4>Generation 8</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(Gen8Pokemon)}
                </section>
            </main>
        )
}

export default GetPokemon;