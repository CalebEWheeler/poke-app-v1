import React, {useEffect, useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import pikaGif from "./Images/dissapointedpika.gif";

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
                    <section className={filteredPokemon.length === 0 ?
                        "dissapointed-pika-section" : "hide-gen-section"}>
                        <div className={"oh-no-msg-cont"}>
                            <img className={"pika-img"} src={pikaGif} alt="dissapointedPikachu"/>
                            <div className={"oh-no-cont"}>
                                <p className={"oh-no-text"}>Whoops,<br/>it looks<br/>like the<br/> pokemon you<br/>are searching<br/>for doesn't<br/>exist...</p>
                            </div>
                        </div>
                    </section>
                </main>
            )
        }
    }
}

export default SearchPokemon;