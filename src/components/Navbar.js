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
          <a href="#faq" className="navbar-link">FAQ</a>
        </li>
        <li className="navbar-item">
          <a href="#wiki" className="navbar-link">Wiki</a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
