import React from 'react';

import NavbarIndex from "./NavbarIndex";
import GetPokemon from "./GetPokemon";
import "./Style/App.css"
import "./Style/NavbarIndex.css"
import SearchPokemon from "./SearchPokemon";

const App = () => {

//TODO: in this container have it house the results of:
// - all pokemon
// - searched pokemon
//TODO: have logic to hide and show results based on input value

    console.log(document.getElementsByClassName("round-input"));

    return (
        <div>
           <NavbarIndex/>
           <GetPokemon/>
           {/*<SearchPokemon/>*/}
        </div>
    )
}

export default App;