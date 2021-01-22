import React from 'react';

import NavbarIndex from "./NavbarIndex";
import GetPokemon from "./GetPokemon";
import "./Style/App.css"
import "./Style/NavbarIndex.css"

const App = () => {



    return (
        <div>
           <NavbarIndex/>
           <GetPokemon/>
        </div>
    )
}

export default App;