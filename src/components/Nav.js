import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({isOpen, setIsOpen}) => {
    return(
        <nav>
            <h1>Music App</h1>
            <button onClick={() => setIsOpen(!isOpen)}>
                Library 
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav; 