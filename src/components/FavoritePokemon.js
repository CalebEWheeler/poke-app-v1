import React, {useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import {faMinusSquare} from "@fortawesome/free-solid-svg-icons";

const FavoritePokemon = () => {
    const [error, setError] = useState(null);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        let favoritePokemon = [];
        for(let i = 1; i <= localStorage.length; i++) {
            favoritePokemon.push(JSON.parse(localStorage.getItem(i)));
        }

        return (
            <main>
                <h4>Favorite Pokemon</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(favoritePokemon)}
                </section>
            </main>
        )
    }
}

export default FavoritePokemon;