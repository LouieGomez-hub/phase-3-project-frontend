import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink className='headerlink'
                to="/"
            >
                Made <br/> Super
            </NavLink>
            <img className='headerimg' src="https://www.kindpng.com/picc/m/113-1132490_transparent-believe-clipart-superhero-clipart-transparent-hd-png.png" alt="Transparent Believe Clipart - Superhero Clipart Transparent, HD Png Download@kindpng.com"></img>
            <NavLink className='navlink'
                to="/superheros"
            >
                Hero Suite
            </NavLink>
            <NavLink className='navlink'
                to="/about"
            >
                About
            </NavLink>
        </div>
    )
}


export default NavBar;