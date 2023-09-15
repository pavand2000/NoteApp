import React from 'react';
import logo from './Image/logo.png';
import './App.css'; // Import your CSS file

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt='logo' width='70' height='50'/>
      <h1>Makes Your Daily Notes</h1>
    </div>
  );
}

export default Header;
