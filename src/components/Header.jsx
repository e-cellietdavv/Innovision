import React from 'react';
import './Header.css';
import ecell from '../assets/ecell-logo.png';
import innovision from '../assets/LOGO.png';

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header-section">
        <div className="logo-div">
          <img src={innovision} alt="Logo" id="logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;