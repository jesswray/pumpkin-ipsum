import React from 'react';
import leaf from './fall_leaves.png'
import './Header.css';

const Header = () => (
  <header className="Header">
    <img src={leaf} height={100} width={100} className="Header__image" alt="logo" />
    <h1 className="Header__title">Pumpkin Ipsum</h1>
  </header>
);

export default Header;
