import React, {useEffect, useState} from 'react';

import NavbarIndex from "./NavbarIndex";
import GetPokemon from "./GetPokemon";
import "./Style/App.css"
import "./Style/NavbarIndex.css"
import SearchPokemon from "./SearchPokemon";
import useLoader from "./Hooks/useLoader";

const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const controller = new AbortController();
    const { signal } = controller;

    const inputValue = (searchValue) => {
        setSearchValue(searchValue);
    }

    const getOrSearchPokeBlock = () => {
        if(searchValue === "") {
            controller.abort();
            return (<GetPokemon/>);
        }
        else {
            controller.abort();
            return (<SearchPokemon signal={signal} searchValue={searchValue}/>);
        }
    }

    return (
        <div>
           <NavbarIndex searchValue={searchValue} onInputChange={inputValue}/>
           {getOrSearchPokeBlock()}
        </div>
    )
}

export default App;