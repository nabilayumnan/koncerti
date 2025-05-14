import React, { useState } from 'react';

const PromoCode = () => {
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  const togglePromoInput = () => {
    setShowPromoInput(!showPromoInput);
  };

  const handlePromoChange = (e) => {
    setPromoCode(e.target.value);
  };

  const applyPromo = () => {
    console.log('Applying promo code:', promoCode);
    // Implement promo code validation and application logic
  };

  return (
    <div className="promo-code-section">
      <h2 className="section-title">
        <span className="icon">🎁</span> Redeem Promotion
      </h2>
      
      <button 
        className="promo-code-toggle"
        onClick={togglePromoInput}
      >
        HAVE A PROMO CODE?
      </button>
      
      {showPromoInput && (
        <div className="promo-input-container">
          <input
            type="text"
            value={promoCode}
            onChange={handlePromoChange}
            placeholder="Enter promo code"
            className="promo-input"
          />
          <button 
            className="apply-promo-button"
            onClick={applyPromo}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default PromoCode;