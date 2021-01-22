import React, {useState, useEffect} from 'react';

function GetPokemon() {
    //can refactor this method to take in params based on the position of the scroll to make another get for the next gen of pokemon...
    // may need two seperate methods to persist the previous gen list
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [AllPokemon, setAllPokemon] = useState([]);

    //refactor to make a get by poke gen and probably change filter by type to filter by gen...


    const getListByGen = async url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data=> {
                    resolve(data)
                })
        });
    }

    const showPokemon = () => {
        const getData = async () => {
            const pokeUrls = [
                "https://pokeapi.co/api/v2/pokemon?limit=151",
                "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100"
                // ,
                // "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135",
                // "https://pokeapi.co/api/v2/pokemon?offset=386&limit=108",
                // "https://pokeapi.co/api/v2/pokemon?offset=495&limit=154",
                // "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72",
                // "https://pokeapi.co/api/v2/pokemon?offset=721&limit=88",
                // "https://pokeapi.co/api/v2/pokemon?offset=809&limit=89",
            ];
            // for(let url of pokeUrls) {
            let url = "https://pokeapi.co/api/v2/pokemon?limit=3";
                let response = await getListByGen(url)
                await renderPokemon(response.results);
                // setIsLoaded(!isLoaded);
            // }
        }
        getData();
    }

    useEffect(showPokemon, []);

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

    const renderPokemon = async data => {
        let pokeList = await Promise.all(data.map(async pokemon => {
            let getPokemon = await getEachPokemon(byPokeUrl + pokemon.name)
            return getPokemon;
        }))
        setAllPokemon(pokeList);
    }


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={"grid-container"}>
                {AllPokemon.map((pokemon,index) => {
                    return  <div className={"grid-item"} key={index}>
                                <div className={"left-card"}>
                                    <div className={"image-radius"}>
                                        <img src={pokemon.sprites.front_default} alt="pokeImg"/>
                                    </div>
                                    <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1)}</p>
                                </div>
                                <div className={"right-card"}>
                                    <p>Dex Entry: {pokemon.id}</p>
                                    <p>Height: {pokemon.height}"</p>
                                    <p>Weight: {pokemon.weight}lbs</p>
                                    <p>Type:
                                        <span className={pokemon.types[0].type.name}>
                                            {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.substr(1)}
                                        </span>
                                        <span className={pokemon.types[1].type.name}>
                                            {pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.substr(1)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                })}
            </div>
        )
    }
}

export default GetPokemon;