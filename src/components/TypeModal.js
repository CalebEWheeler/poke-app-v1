import React from 'react';
import "./Style/TypeModal.css";
import Modal from "react-bootstrap/Modal";

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
const TypeModal = ({ parentCallback }) => {
    let isOpen = false;
    let showModal = false;
    const typeBlock1 = [
        {type: 'Water', img: waterImg},
        {type: 'Grass', img: grassImg},
        {type: 'Fire', img: fireImg}]
    const typeBlock2 = [
        {type: 'Poison', img: poisonImg},
        {type: 'Fighting', img: fightingImg},
        {type: 'Flying', img: flyingImg}]
    const typeBlock3 = [
        {type: 'Rock', img: rockImg},
        {type: 'Ground', img: groundImg},
        {type: 'Electric', img: electricImg}]
    const typeBlock4 = [
        {type: 'Dragon', img: dragonImg},
        {type: 'Bug', img: bugImg},
        {type: 'Ice', img: iceImg}]
    const typeBlock5 = [
        {type: 'Normal', img: normalImg},
        {type: 'Dark', img: darkImg},
        {type: 'Ghost', img: ghostImg}]
    const typeBlock6 = [
        {type: 'Psychic', img: psychicImg},
        {type: 'Fairy', img: fairyImg},
        {type: 'Steel', img: steelImg}]

    const content = [{block: typeBlock1}, {block: typeBlock2}, {block: typeBlock3}, {block: typeBlock4}, {block: typeBlock5}, {block: typeBlock6}];

    const renderContent = content.map(section => {

        return (
            <div>
                <div className={"d-flex justify-content-around"} key={section.block}>{section.block.map(icon => {
                    return (
                        <div className={"my-2"} key={icon.type}
                             onClick={() => {
                            parentCallback(!isOpen, !showModal);
                        }
                        }>
                        <img className={(icon.type.toLowerCase()) + " btn-circle"} src={icon.img} alt={icon.type + "Img"}/>
                        </div>
                )
                })}</div>
            </div>
        )
    })

    return (
        <Modal.Body>
            <div>{renderContent}</div>
        </Modal.Body>
    )
}

export default TypeModal;