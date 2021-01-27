import React, {useEffect, useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";

const SearchPokemon = ({Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon, searchValue}) => {
    const [error, setError] = useState(null);

    let allPokemon = [Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon];


    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        if (searchValue) {
            let filteredPokemon = [];
            for (let gen of allPokemon) {
                for (let pokemon of gen) {
                    if(pokemon.name.includes(searchValue.toLowerCase())) {
                        filteredPokemon.push(pokemon);
                    }
                }
            }
            return (
                <main>
                    <h4>Search Results</h4>
                    <section className={"grid-container"}>
                        {CreatePokeCards(filteredPokemon)}
                    </section>
                </main>
            )
        }
    }
}

export default SearchPokemon;