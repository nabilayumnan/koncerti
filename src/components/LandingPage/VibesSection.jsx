// src/components/LandingPage/VibesSection.jsx
import React from 'react';

const VibesSection = () => {
  return (
    <section className="vibes-section">
      <div className="container">
        <div className="vibes-content">
          <div className="vibes-text">
            <h2 className="section-title">Unforgettable Vibes</h2>
            <p className="section-description">
              Get ready for days of non-stop music, delicious food, 
              and unforgettable memories. Whether you're here for 
              the headliners or the experience, every moment is 
              designed to keep the vibes alive.
            </p>
            <button className="learn-more-button">LEARN MORE</button>
          </div>
          <div className="vibes-image">
            <div className="festival-crowd"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibesSection;