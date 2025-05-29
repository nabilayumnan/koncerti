// src/components/LandingPage/PaymentSection.jsx
import React from 'react';

const PaymentSection = () => {
  return (
    <section className="payment-section">
      <div className="container">
        <div className="payment-content">
          <div className="payment-image">
            <div className="holographic-cards"></div>
          </div>
          <div className="payment-text">
            <h2 className="section-title">Pay Your Way</h2>
            <p className="section-description">
              We offer a variety of payment methods — credit cards, 
              digital wallets, and flexible installment plans — so you 
              never miss the music.
            </p>
            <button className="learn-more-button">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;