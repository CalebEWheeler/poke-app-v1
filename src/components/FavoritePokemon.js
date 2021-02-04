import React, {useState} from 'react';
import CreatePokeCards from "./CreatePokeCards";
import {faMinusSquare} from "@fortawesome/free-solid-svg-icons";
import pikaGif from "./Images/dissapointedpika.gif";

const FavoritePokemon = () => {
    const [error, setError] = useState(null);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        let favoritePokemon = [];
        for(let i = 0; i <= 898; i++) {
            if(localStorage.getItem(i) === null) {
                continue;
            }
            favoritePokemon.push(JSON.parse(localStorage.getItem(i)));
        }

        return (
            <main>
                <h4>Favorite Pokemon</h4>
                <section className={"grid-container"}>
                    {CreatePokeCards(favoritePokemon)}
                </section>
                <section className={localStorage.length === 0 ?
                    "dissapointed-pika-section" : "hide-gen-section"}>
                    <div className={"oh-no-msg-cont"}>
                        <img className={"pika-img"} src={pikaGif} alt="dissapointedPikachu"/>
                        <div className={"oh-no-cont"}>
                            <p className={"oh-no-text"}>Oh no,<br/>it appears<br/>you don't have<br/>any favorite<br/>pokemon...</p>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default FavoritePokemon;