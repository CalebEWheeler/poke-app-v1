import React, {useEffect, useState} from 'react';

import NavbarIndex from "./NavbarIndex";
import GetPokemon from "./GetPokemon";
import "./Style/App.css"
import "./Style/NavbarIndex.css"
import SearchPokemon from "./SearchPokemon";
import useLoader from "./Hooks/useLoader";

const App = () => {
    const [searchValue, setSearchValue] = useState("");

    const inputValue = (searchValue) => {
        setSearchValue(searchValue);
    }

    // const [loader, showLoader, hideLoader] = useLoader();

    const getOrSearchPokeBlock = () => {
        if(searchValue === "") return (<GetPokemon/>);
        else return (<SearchPokemon searchValue={searchValue}/>);
    }

    return (
        <div>
           <NavbarIndex searchValue={searchValue} onInputChange={inputValue}/>
           {getOrSearchPokeBlock()}
        </div>
    )
}

export default App;