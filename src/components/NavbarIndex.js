import React, {useState} from 'react';
import pokeball from './Images/pokeball1.png';
import allTypes from './Images/all_types.png';
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

    const RenderDropdown = () => {
        if (isOpen === true) {
            return (
                <div className={'pokeball-menu'}>
                    <div className={"dropdown-link d-flex" + (searchStatus ? "" : " center-icon")}>
                        <FontAwesomeIcon icon={faSearch} size="2x" onClick={() => {searchTransition(searchStatus);}}
                        className={"nav-links circular align-self-center hover" + (searchStatus ? " search-hide" : " search-show")}></FontAwesomeIcon>
                        <div className={"search-container d-flex align-self-center" + (!searchStatus ? " search-hide" : " search-show")}>
                            <FontAwesomeIcon icon={faCaretRight} size="2x"
                            className={"align-self-center mr-1 hover " + (!searchStatus ? "search-hide" : "search-show")}
                            onClick={() => {
                                setSearchStatus(false)
                            }}></FontAwesomeIcon>
                            <input autoFocus
                                   className={"nav-links round-input" + (!searchStatus ? " search-hide" : " search-show")}
                                   placeholder={"Search..."} type={"text"}
                                   onChange={handleInputChange}
                                   value={searchValue}
                            />
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faStar} size={"2x"} onClick={handleFavoritesClick} className={"dropdown-link hover center-icon"}/>
                    {/*<div className={"dropdown-link align-self-center"}>*/}
                    {/*    <img className={(!showModal ? "all-types" : "all-types-active") + " p-1"}*/}
                    {/*         onClick={() => setShowModal(!showModal)*/}
                    {/*         } src={allTypes} alt="Filter by types"/>*/}
                    {/*</div>*/}
                </div>
            )
        }
        return null;
    }

    const pokeballImg = () => {
        return (
            <button className={"buttonInner" + (!isOpen ? " closedPokeball" : " openPokeball")}
                    type={'button'} onClick={() => {
                setIsOpen(!isOpen)
                if (isOpen != true) {
                    setSearchStatus(false)
                }
            }}>
                <img className={"pokeball"} src={pokeball} alt="pokeball"/>
            </button>
        )
    }

    return [
        (
            <React.Fragment>
                <nav className={"nav d-flex"}>
                    <div className={"title-cont"}>
                        <h4 className={"home"} onClick={() => {handleHomeBtnClick()}}>Poké Finder</h4>
                    </div>
                    <div className={"ml-auto mr-3 my-auto drop-icon"}>
                        <div className={""}>
                            {pokeballImg()}
                        </div>
                        <RenderDropdown/>
                    </div>
                </nav>

                {/*<Modal*/}
                {/*    show={showModal}*/}
                {/*    onHide={() => setShowModal(!showModal)}*/}
                {/*    dialogClassName="modal-90w"*/}
                {/*    aria-labelledby="example-custom-modal-styling-title"*/}
                {/*>*/}
                {/*    <Modal.Header closeButton>*/}
                {/*        <Modal.Title id="example-custom-modal-styling-title">*/}
                {/*            Custom Modal Styling*/}
                {/*        </Modal.Title>*/}
                {/*    </Modal.Header>*/}
                {/*    <Modal.Body>*/}
                {/*        <TypeModal parentCallback={callback}/>*/}
                {/*    </Modal.Body>*/}
                {/*</Modal>*/}
            </React.Fragment>
        )]
}

export default NavbarIndex;