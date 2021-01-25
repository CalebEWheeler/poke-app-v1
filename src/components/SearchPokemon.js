import React, {useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";

const SearchPokemon = ({searchValue}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const getPokemon = async () => {
        return new Promise((resolve, reject) => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=897")
                .then(response => response.json())
                .then(data => {
                    let filteredData = data.results.filter(pokemon => pokemon.name.includes(searchValue.toLowerCase()))
                    resolve(filteredData);
                })
        });
    }

    const queryPokemon = () => {
        const getData = async () => {
            let response = await getPokemon()
            await renderPokemon(response);
        }
        getData()
    }

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
        setSearchResults(pokeList.filter(pokemon => pokemon.name.includes(searchValue.toLowerCase())))
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
        return <div>Loading...</div>;
    } else {
        if (searchValue) {
            queryPokemon()
            return (
                <main>
                    <h4>Search Results</h4>
                    <section className={"grid-container"}>
                        {CreatePokeCards(searchResults)}
                    </section>
                </main>
            )
        }
    }
}

export default SearchPokemon;