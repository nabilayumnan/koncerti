// src/components/LandingPage/AccessSection.jsx
import React from 'react';

const AccessSection = () => {
  return (
    <section className="access-section">
      <div className="container">
        <div className="access-content">
          <div className="access-image">
            <div className="stage-performance"></div>
          </div>
          <div className="access-text">
            <h2 className="section-title">Easy Access for Everyone</h2>
            <p className="section-description">
              Our centrally located venue makes it easy to get to the 
              heart of the action. With accessible facilities and nearby 
              public transport, everyone can join the fun without the 
              hassle.
            </p>
            <button className="learn-more-button">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;