import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Wadder</h1>
        <h2 className="header-subtitle">Your AI-Powered Discord Bot</h2>
        <p className="header-description">
          Wadder brings powerful AI features, moderation tools, and fun mini-games to your Discord server.
        </p>
        <button className="header-cta">Add Wadder to Your Server</button>
      </div>
    </header>
  );
};

export default Header;