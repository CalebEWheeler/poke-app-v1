import React from 'react';
import axios from 'axios';

const SearchPokemon = () => {

    //can refactor this method to take in params based on the position of the scroll to make another get for the next gen of pokemon...
    // may need two seperate methods to persist the previous gen list
    const getOriginal151 = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(response => response.json())
            .then(pokemon => console.log(pokemon))
    }


    return (
        <div>Searched Pokemon page</div>
    )
}

export default SearchPokemon;