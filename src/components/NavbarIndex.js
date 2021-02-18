import React, {useEffect, useRef, useState} from 'react';
import pokeball from './Images/pokeball3.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const NavbarIndex = ({ 
    showFavoritePokemon, 
    onFavoritesClick, 
    searchValue, 
    onInputChange, 
    aboutPage, 
    onAboutClick 
}) => {

    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [searchStatus, setSearchStatus] = useState(false);

    const handleHomeBtnClick = () => {
        onAboutClick(false);
        onFavoritesClick(false);
        onInputChange("")
    }

    const handleInputChange = (event) => {
        onAboutClick(false);
        onInputChange(event.target.value)
    }

    const handleFavoritesClick = () => {
        onAboutClick(false);
        onInputChange("");
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
            // <React.Fragment>
                <nav className={"nav"}>
                    <div className={"title-cont"}>
                        <h4 
                            className={"home"} 
                            onClick={() => {handleHomeBtnClick()}}>Poké Finder</h4>
                        <p className="main-menu-tooltip">To All Pokemon</p>
                    </div>
                    <div className={"icons-block"}>
                        <div className={"dropdown-link" + (searchStatus ? "" : " ")}>
                            <div className={"search-container"}>
                                <FontAwesomeIcon 
                                    icon={faSearch} 
                                    size="3x" 
                                    onClick={() => {searchTransition(searchStatus);}}
                                    className={"search-icon hover" + (searchStatus ? "  search-hide" : " search-show")}>
                                </FontAwesomeIcon>
                                <span className="search-tooltip">Search Pokemon</span>
                            </div>
                            <div 
                            className={"search-container d-flex align-self-center" + (!searchStatus ? " search-hide" : " search-show")}>
                                <input autoFocus
                                       className={"nav-links round-input hover" + (!searchStatus ? " search-hide" : " search-show")}
                                       placeholder={"Search..."} type={"text"}
                                       onChange={handleInputChange}
                                       ref={searchBarRef}
                                       value={searchValue}
                                />
                            </div>
                            <div className={"dropdown-link icon-cont hover"}>
                                <img 
                                    src={pokeball} 
                                    alt={"favoritePokemon"} 
                                    onClick={handleFavoritesClick}/>
                                <p className="favorites-tooltip">To Favorites</p>
                            </div>
                        </div>
                    </div>
                </nav>
            // </React.Fragment>
        )]
}

export default NavbarIndex;