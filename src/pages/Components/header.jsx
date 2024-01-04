import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../css/index.css';

const Header = () => {
  return (
    <div className='container'>
        <div className='titleContainer'>
          <a className='title' href='/'>TASTE</a>
        <div className='menuContainer'>
          <div className='menuOptions'>
            <a className='menuOption' href="/recipes">Recipes</a>
            <a className='menuOption' href="/drinks">Drinks</a>
            <a className='menuOption' href="/upload">Upload</a>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Header;
