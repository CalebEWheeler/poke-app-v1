import React, {useState} from 'react';

import NavbarIndex from "./NavbarIndex";
import GetPokemon from "./GetPokemon";
import "./Style/App.css"
import "./Style/NavbarIndex.css"
import SearchPokemon from "./SearchPokemon";

const App = () => {
    const [searchValue, setSearchValue] = useState("");
//TODO: in this container have it house the results of:
// - all pokemon
// - searched pokemon
//TODO: have logic to hide and show results based on input value

    const inputValue = (searchValue) => {
        setSearchValue(searchValue);
    }

    const getOrSearchPokeBlock = () => {
        if(searchValue === "") return (<GetPokemon/>);
        else return (<SearchPokemon/>);
    }

    return (
        <div>
           <NavbarIndex searchValue={searchValue} onInputChange={inputValue}/>
           {getOrSearchPokeBlock()}
        </div>
    )
}

export default App;