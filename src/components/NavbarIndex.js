import React, {useEffect, useRef, useState} from 'react';
import pokeball from './Images/pokeball3.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faStar} from '@fortawesome/free-solid-svg-icons'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import Modal from "react-bootstrap/Modal";
import TypeModal from "./TypeModal";

const NavbarIndex = ({ showFavoritePokemon, onFavoritesClick, searchValue, onInputChange }) => {
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [searchStatus, setSearchStatus] = useState(false);

    const handleHomeBtnClick = () => {
        onFavoritesClick(false);
        onInputChange("")
    }

    const handleInputChange = (event) => {
        onInputChange(event.target.value)
    }

    const handleFavoritesClick = () => {
        onFavoritesClick(!showFavoritePokemon)
    }

    const callback = (isOpen, showModal) => {
        setIsOpen(!isOpen);
        setShowModal(!showModal);
    }

    const searchTransition = (searchStatus) => {
        setSearchStatus(!searchStatus)
        if (isOpen === true) {
            setSearchStatus(!searchStatus);
        } else if (isOpen === false) {
            setSearchStatus(!searchStatus)
        }
    }

    let searchBarRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!searchBarRef.current.contains(event.target)) {
                setSearchStatus(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    })

    return [
        (
            <React.Fragment>
                <nav className={"nav"}>
                    <div className={"title-cont"}>
                        <h4 className={"home"} onClick={() => {handleHomeBtnClick()}}>Poké Finder</h4>
                    </div>
                    <div className={"icons-block"}>
                        <div className={"dropdown-link" + (searchStatus ? "" : " ")}>
                            <div className={"search-container"}>
                                <FontAwesomeIcon icon={faSearch} size="3x" onClick={() => {searchTransition(searchStatus);}}
                                                 className={"search-icon hover" + (searchStatus ? " search-hide" : " search-show")}></FontAwesomeIcon>
                            </div>
                            <div className={"search-container d-flex align-self-center" + (!searchStatus ? " search-hide" : " search-show")}>
                                <input autoFocus
                                       className={"nav-links round-input hover" + (!searchStatus ? " search-hide" : " search-show")}
                                       placeholder={"Search..."} type={"text"}
                                       onChange={handleInputChange}
                                       ref={searchBarRef}
                                       value={searchValue}
                                />
                            </div>
                            <div className={"dropdown-link icon-cont hover"}>
                                <img src={pokeball} alt={"favoritePokemon"} onClick={handleFavoritesClick}/>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )]
}

export default NavbarIndex;