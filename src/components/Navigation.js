// Header.js

import React, { useState } from 'react';
import { FaBars, FaSearch, FaHeart, FaStore, FaUser, FaLanguage } from 'react-icons/fa'; // Import the necessary icons
import './Navigation.css';

const Header = () => {
    const [menubar,setMenubar]=useState(true);
  return (
    <header>
      <nav>
        <ul className="navigation-list">
          <li ><a href="#"><FaBars onClick={()=>setMenubar(!menubar)} className={ menubar ? 'menu-bar':"close-menu"}/></a></li> {/* Use the FaBars icon for the menu */}
       
          <li><a href="#"><FaSearch className={menubar ? 'menu':""}/></a></li>
          <li><a href="#"><FaHeart className={menubar ? 'menu':""}/></a></li>
          <li><a href="#"><FaStore className={menubar ? 'menu':""}/></a></li>
          <li><a href="#"><FaUser className={menubar ? 'menu':""}/></a></li>
          <li><a href="#"><select className={menubar ? 'menu':""}><option>ENG</option></select></a></li>
    
        </ul>
      </nav>
    </header>
  );
}

export default Header;
