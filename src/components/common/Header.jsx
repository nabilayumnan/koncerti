// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import './src/components/common/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">KONCERTI</span>
          <span className="logo-icon">♪</span>
        </Link>
        
        <nav className="main-nav">
          <ul className="nav-links">
            <li><Link to="/lineup">LINEUP</Link></li>
            <li><Link to="/cart">CART</Link></li>
            <li>
              <Link to="/passes" className="buy-tickets-button">
                BUY TICKETS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;