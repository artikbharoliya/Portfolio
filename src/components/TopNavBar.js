import React, { useState } from 'react'

import burger from '../assets/menu.svg';

import '../styles/TopNavBar.css';
   
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
function TopNavBar() {
    const [open,setOpen] = useState();
    const handleClose = () => {
        setOpen(false)
    }

    var isMenuOpen = function(state) {
        setOpen(state.isOpen)
      };
    return (
        <>
            <Menu  right onStateChange={ isMenuOpen } isOpen={open} customBurgerIcon={ <img src={burger} alt="Menu Button"/> } itemListElement="div">
                <div id="home" className="menu-item custom-item"><Link to="/" onClick={handleClose}>Home</Link></div>
                <div id="about" className="menu-item custom-item"><Link to="/portfolio" onClick={handleClose}>Portfolio </Link></div>
                <div id="contact" className="menu-item custom-item"><Link to="/contact" onClick={handleClose}>Contact Me</Link></div>
                <div  className="menu-item custom-item" ><Link to="/aboutme" onClick={handleClose}>About Me</Link></div>
                <div  className="menu-item custom-item"><Link to="/portfolio" onClick={handleClose}>Resume</Link></div>
            </Menu>
        
        
        </>
    )
}

export default TopNavBar
