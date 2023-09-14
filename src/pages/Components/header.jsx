import React, { useState } from 'react';
import '../../Css/index.css';

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <div className='container'>
        <div className='titleContainer'>
          <h1 className='title'>Generations Of Taste</h1>
        </div>
        <div className='menuContainer'>
          <div className='menuOptions'>
            <a className='menuOption' href="/">Home </a>
            <a className='menuOption' href="/about">About </a>
            <a className='menuOption' href="/recipes">Recipes </a>
            <a className='menuOption' href="/sauces">Drinks </a>
          </div>
        </div>
    </div>
  );
};

export default Header;
