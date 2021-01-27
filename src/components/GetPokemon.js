import React, {useState, useEffect, useRef} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import useLoader from "./Hooks/useLoader";
//TODO: refactor to only have method that gets all pokemon

//Create loading icon
//Create search functionality
//Create favorite functionality
//deploy with AWS

function GetPokemon({signal}) {
    const [error, setError] = useState(null);
    const [loader, showLoader, hideLoader] = useLoader();
    const [Gen1Pokemon, setGen1Pokemon] = useState([]);
    const [Gen2Pokemon, setGen2Pokemon] = useState([]);
    const [Gen3Pokemon, setGen3Pokemon] = useState([]);
    const [Gen4Pokemon, setGen4Pokemon] = useState([]);
    const [Gen5Pokemon, setGen5Pokemon] = useState([]);
    const [Gen6Pokemon, setGen6Pokemon] = useState([]);
    const [Gen7Pokemon, setGen7Pokemon] = useState([]);
    const [Gen8Pokemon, setGen8Pokemon] = useState([]);

    let passedSignal = signal;

    const getListByGen = async url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data)
                }).catch(e => {
                console.warn(`Fetch 1 error: ${e.message}`);
            });
        });
    }

        const getData = async () => {
            const pokeUrls = [
                "https://pokeapi.co/api/v2/pokemon?limit=151",
                "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100",
                "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135",
                "https://pokeapi.co/api/v2/pokemon?offset=386&limit=108",
                "https://pokeapi.co/api/v2/pokemon?offset=495&limit=154",
                "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72",
                "https://pokeapi.co/api/v2/pokemon?offset=721&limit=88",
                "https://pokeapi.co/api/v2/pokemon?offset=809&limit=89",
            ];
            showLoader()
            for (let url of pokeUrls) {
                    let response = await getListByGen(url, passedSignal)
                    await renderPokemon(response.results);
            }
            hideLoader()
        }

    useEffect(() => {
        getData()

    }, []);

        let byPokeUrl = "https://pokeapi.co/api/v2/pokemon/";

    const getEachPokemon = url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
        });
    }

    let counter = 0;
    const renderPokemon = async data => {
        let pokeList = await Promise.all(data.map(async pokemon => {
            let getPokemon = await getEachPokemon(byPokeUrl + pokemon.name)
            return getPokemon;
        }))
        counter++;
        switch (counter) {
            case 1 :
                setGen1Pokemon(pokeList);
                break;
            case 2 :
                setGen2Pokemon(pokeList);
                break;
            case 3 :
                setGen3Pokemon(pokeList);
                break;
            case 4 :
                setGen4Pokemon(pokeList);
                break;
            case 5 :
                setGen5Pokemon(pokeList);
                break;
            case 6 :
                setGen6Pokemon(pokeList);
                break;
            case 7 :
                setGen7Pokemon(pokeList);
                break;
            case 8 :
                setGen8Pokemon(pokeList);
                break;
            default :
                break;
        }

    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {

        //Array of all gen's and use a loop to filter through the list and build JSX
        //for each gen...

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
}

export default GetPokemon;