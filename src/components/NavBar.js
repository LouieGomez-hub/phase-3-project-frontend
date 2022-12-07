import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink
                to="/"
            >
                <header>Made Super</header>
            </NavLink>
            <NavLink
                to="/superheros"
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