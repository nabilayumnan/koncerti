import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 57,
    hours: 2,
    minutes: 31,
    seconds: 4
  });

  // Calculate countdown to event date
  useEffect(() => {
    const eventDate = new Date('2025-07-22T18:00:00'); // Set your event date here
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">UNTIL THE BIGGEST NIGHT OF THE YEAR,</p>
        <h1 className="hero-title">
          Feel the Vibe,<br />
          Live the Moment
        </h1>
        
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="countdown-label">DAYS</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">HOURS</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">MINUTES</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">SECONDS</span>
          </div>
        </div>
        
        <Link to="/passes">
          <button className="cta-button">GET TICKET NOW</button>
        </Link>
      </div>
      
      <div className="hero-background">
        <div className="overlay"></div>
      </div>
    </section>
  );
};

export default HeroSection;