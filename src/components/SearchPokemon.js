import React, {useEffect, useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import useLoader from "./Hooks/useLoader";

const SearchPokemon = ({signal, searchValue}) => {
    const [error, setError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [loader, showLoader, hideLoader] = useLoader();



    const getPokemon = async (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let filteredData = data.results.filter(pokemon => pokemon.name.includes(searchValue.toLowerCase()))
                    resolve(filteredData);
                }).catch(e => {
                console.warn(`Fetch 1 error: ${e.message}`);
            });
        });
    }

    const queryPokemon = () => {
        const getData = async () => {
            // showLoader()
            let url = "https://pokeapi.co/api/v2/pokemon?limit=897";
            let response = await getPokemon(url, { signal })
            await renderPokemon(response);
            // hideLoader()
        }
        getData()
    }

    // useEffect(() => {
    //     showLoader()
    // }, []);

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
    } else {
        if (searchValue) {
            queryPokemon()
            return (
                <main>
                    {loader}
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