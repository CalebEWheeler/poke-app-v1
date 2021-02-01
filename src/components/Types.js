import React from 'react';
import waterImg from "./Images/water-icon.png";
import grassImg from "./Images/grass-icon.png";
import fireImg from "./Images/fire-icon.png";
import poisonImg from "./Images/poison-icon.png";
import fightingImg from "./Images/fighting-icon.png";
import flyingImg from "./Images/flying-icon.png";
import rockImg from "./Images/rock-icon.png";
import groundImg from "./Images/ground-icon.png";
import electricImg from "./Images/electric-icon.png";
import dragonImg from "./Images/dragon-icon.png";
import bugImg from "./Images/bug-icon.png";
import iceImg from "./Images/ice-icon.png";
import normalImg from "./Images/normal-icon.png";
import darkImg from "./Images/dark-icon.png";
import ghostImg from "./Images/ghost-icon.png";
import psychicImg from "./Images/psychic-icon.png";
import fairyImg from "./Images/fairy-icon.png";
import steelImg from "./Images/steel-icon.png";

const Types = (passedType) => {
    // console.log(passedType)

    let allTypes = [
        {name: 'water', img: waterImg},
        {name: 'grass', img: grassImg},
        {name: 'fire', img: fireImg},
        {name: 'poison', img: poisonImg},
        {name: 'fighting', img: fightingImg},
        {name: 'flying', img: flyingImg},
        {name: 'rock', img: rockImg},
        {name: 'ground', img: groundImg},
        {name: 'electric', img: electricImg},
        {name: 'dragon', img: dragonImg},
        {name: 'bug', img: bugImg},
        {name: 'ice', img: iceImg},
        {name: 'normal', img: normalImg},
        {name: 'dark', img: darkImg},
        {name: 'ghost', img: ghostImg},
        {name: 'psychic', img: psychicImg},
        {name: 'fairy', img: fairyImg},
        {name: 'steel', img: steelImg}
    ];

    for(let type of allTypes) {
        if(type.name === passedType) {
        return (
            <div>
                <img src={type.img} alt={type.name}/>
            </div>
        )}
    }
}

export default Types;