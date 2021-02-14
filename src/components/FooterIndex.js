import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

const FooterIndex = ({ 
  aboutPage,
  onAboutClick   
}) => {
  //TODO: need to pass from App.js showGetPokemon.val and setAboutPage.val and provide methods to handle the state change

  const handleAboutClick = () => {
    onAboutClick(!aboutPage);
  }

  return (
    <footer>
        <div className={"github-tooltip"}>
            <FontAwesomeIcon 
              className={"footer-icon"} 
              icon={faGithubAlt} 
              size={"3x"} 
              onClick={() => {
                  window.location.href = "https://github.com/CalebEWhpoke-app-v1"
              }}>
            </FontAwesomeIcon>
            <p className="footer-tooltip">To Github</p>
        </div>
        <div className={"about-tooltip"}>
            <FontAwesomeIcon 
              className={"footer-icon"} 
              icon={faInfoCircle} 
              size={"3x"}
              onClick={() => {
                  handleAboutClick();
              }}>
            </FontAwesomeIcon>
            <p className="footer-tooltip">To About Page</p>
        </div>
    </footer>
  )
}

export default FooterIndex;