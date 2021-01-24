import React from 'react';

import NavbarIndex from "./NavbarIndex";
import GetPokemon from "./GetPokemon";
import "./Style/App.css"
import "./Style/NavbarIndex.css"

const App = () => {

//TODO: in this container have it house the results of:
// - all pokemon
// - searched pokemon
//TODO: have logic to hide and show results based on input value

    return (
        <div>
           <NavbarIndex/>
           <GetPokemon/>
        </div>
    )
}

export default App;