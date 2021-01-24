import React from 'react';
import CreatePokeCards from "./CreatePokeCards";
import NavbarIndex from "./NavbarIndex";

//TODO: import method that builds pokemon blocks
//TODO: have method that handles search functionality

const SearchPokemon = () => {

    console.log(NavbarIndex);

    return (
        <main>
            <h4>Search Results</h4>
            <section className={"grid-container"}>
                {/*{CreatePokeCards(query)}*/}
            </section>
        </main>
    )
}

export default SearchPokemon;