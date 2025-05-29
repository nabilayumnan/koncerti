import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './PassesPage.css';
import { Link } from 'react-router-dom';
const PassesPage = () => {
  return (
    <div className="passes-page">
      <Header />
      
      <main className="passes-main">
        <div className="container">
          <h1 className="page-title">Passes</h1>
          
          <section className="important-details">
            <h2 className="section-title">Important Details</h2>
            <div className="details-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat.
              </p>
            </div>
          </section>
          
          <section className="pick-day-section">
        <h2 className="section-title">Pick Your Day</h2>
        
        <div className="day-selection">
          <div className="festival-image">
            <img src="/images/passes.png" alt="Festival stage with lights" />
          </div>

          <div className="passes-grid">
            <div className="pass-option">
              <h3>3-Day Pass</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="pass-buttons">
                <Link to="/ticket-quantity?type=3day&class=vip&price=650&name=VIP%20Pass%203-Day" className="pass-button vip">
                  VIP
                </Link>
                <Link to="/ticket-quantity?type=3day&class=general&price=430&name=General%20Pass%203-Day" className="pass-button general">
                  General
                </Link>
              </div>
            </div>
            
            <div className="pass-option">
              <h3>Friday</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="pass-buttons">
                <Link to="/ticket-quantity?type=friday&class=vip&price=230&name=VIP%20Pass%20Friday" className="pass-button vip">
                  VIP
                </Link>
                <Link to="/ticket-quantity?type=friday&class=general&price=150&name=General%20Pass%20Friday" className="pass-button general">
                  General
                </Link>
              </div>
            </div>
            
            <div className="pass-option">
              <h3>Saturday</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="pass-buttons">
                <Link to="/ticket-quantity?type=saturday&class=vip&price=230&name=VIP%20Pass%20Saturday" className="pass-button vip">
                  VIP
                </Link>
                <Link to="/ticket-quantity?type=saturday&class=general&price=150&name=General%20Pass%20Saturday" className="pass-button general">
                  General
                </Link>
              </div>
            </div>
            
            <div className="pass-option">
              <h3>Sunday</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="pass-buttons">
                <Link to="/ticket-quantity?type=sunday&class=vip&price=230&name=VIP%20Pass%20Sunday" className="pass-button vip">
                  VIP
                </Link>
                <Link to="/ticket-quantity?type=sunday&class=general&price=150&name=General%20Pass%20Sunday" className="pass-button general">
                  General
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
          
          <section className="lineup-section">
            <h2 className="section-title">...Or Check Our Lineup First</h2>
            
            <div className="artists-grid">
              <div className="artist-card">
                <img src="/images/bts.png" alt="BTS" />
                <h3>BTS</h3>
              </div>
              <div className="artist-card">
                <img src="/images/niki.png" alt="NIKI" />
                <h3>NIKI</h3>
              </div>
              <div className="artist-card">
                <img src="/images/day6.png" alt="DAY6" />
                <h3>DAY6</h3>
              </div>
              <div className="artist-card">
                <img src="/images/bp.png" alt="BLACKPINK" />
                <h3>BLACKPINK</h3>
              </div>
              <div className="artist-card">
                <img src="/images/sabrina (1).png" alt="SABRINA CARPENTER" />
                <h3>SABRINA CARPENTER</h3>
              </div>
            </div>
            
            <div className="view-lineup">
  <Link to="/lineup">view our full lineup here</Link>
</div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PassesPage;

