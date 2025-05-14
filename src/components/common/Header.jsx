import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <span className="logo-text">KONCERTI</span>
        <span className="logo-icon">🎵</span>
      </div>
      
      <nav className="main-nav">
        <ul className="nav-links">
          <li><a href="#lineup">LINEUP</a></li>
          <li><a href="#info">INFO</a></li>
          <li><a href="#buy" className="buy-tickets-button">BUY TICKETS</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;