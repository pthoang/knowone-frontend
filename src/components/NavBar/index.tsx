import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            
            <Link to="/">
                <img alt='knownone-logo' src="https://knowone.no/assets/icons/KnowONElogo.png"></img>
            </Link>
            <div className="links">
            </div>
        </nav>
     );
}
 
export default NavBar;