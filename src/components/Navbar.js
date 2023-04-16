import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <a href="/" className="navbar-logo">Wadder</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-menu-btn" onClick={handleMenuToggle}>
          <span className="navbar-menu-btn-text">Menu</span>
          <span className="navbar-menu-btn-icon"></span>
        </button>
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li className="navbar-item">
        <a href="https://github.com/wadder12/wadder-page/wiki/FAQ" className="navbar-link" target="_blank" rel="noopener noreferrer">FAQ</a>
        </li>
        <li className="navbar-item">
        <a href="https://github.com/wadder12/wadder-page/wiki" className="navbar-link" target="_blank" rel="noopener noreferrer">Wiki</a>
        </li>
        <li className="navbar-item">
        <a href="https://github.com/wadder12/wadder-page/wiki/Changelog-For-Wadder" className="navbar-link" target="_blank" rel="noopener noreferrer">Changelog</a>
        </li>
        <li className="navbar-item">
        <a href="https://discord.gg/A9gxnwgpEN" className="navbar-link" target="_blank" rel="noopener noreferrer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
