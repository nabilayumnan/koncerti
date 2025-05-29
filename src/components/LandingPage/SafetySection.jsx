// src/components/LandingPage/SafetySection.jsx
import React from 'react';

const SafetySection = () => {
  return (
    <section className="safety-section">
      <div className="container">
        <div className="safety-content">
          <div className="safety-text">
            <h2 className="section-title">Stay Safe, Have Fun</h2>
            <p className="section-description">
              Your safety is our priority. We've implemented top-notch 
              security measures and guidelines on prohibited items, security measures, 
              and tips for enjoying the festival to the fullest.
            </p>
            <button className="learn-more-button">LEARN MORE</button>
          </div>
          <div className="safety-image">
            <div className="crowd-celebration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;