import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink
                to="/"
                exact
            >
                <header>Made <br></br> Super</header>
            </NavLink>
            <NavLink
                to="/superheros"
                exact
            >
                Hero Suite
            </NavLink>
            <NavLink
                to="/about"
            >
                About
            </NavLink>
        </div>
    )
}


export default NavBar;