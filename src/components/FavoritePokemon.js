import React, {useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import {faMinusSquare} from "@fortawesome/free-solid-svg-icons";

const FavoritePokemon = ({Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon}) => {
    const [error, setError] = useState(null);

    let allPokemon = [Gen1Pokemon, Gen2Pokemon, Gen3Pokemon, Gen4Pokemon, Gen5Pokemon, Gen6Pokemon, Gen7Pokemon, Gen8Pokemon];


    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        let filteredPokemon = [];
        for (let gen of allPokemon) {
            for (let pokemon of gen) {
                //take in an array of pokemon id's and then filter through
                // checking if the id matches the stored pokemon id
                console.log(pokemon.id)
                // if (pokemon.id.filter(favoritePokemonList)) {
                //     filteredPokemon.push(pokemon);
                // }
            }
        }
        return (
            <main>
                <h4>Favorite Pokemon</h4>
                <section className={"grid-container"}>
                    {/*{CreatePokeCards()}*/}
                </section>
            </main>
        )
    }
}

export default FavoritePokemon;