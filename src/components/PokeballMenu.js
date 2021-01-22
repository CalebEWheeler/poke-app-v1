import React, {useState} from 'react';
import './Style/PokeballMenu.css';
import Modal from "react-bootstrap/Modal";
import TypeModal from "./TypeModal";


const PokeballMenu = () => {

    const [show, setShow] = useState(false);

    return (
        <React.Fragment>
            <ul>
                <li className={"dropdown-link"}>
                    <button className={"nav-links"}>Search</button>
                </li>
                <li className={"dropdown-link"}>
                    <button onClick={() => setShow(true)
                    }>Filter Type</button>
                </li>
            </ul>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TypeModal/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default PokeballMenu;