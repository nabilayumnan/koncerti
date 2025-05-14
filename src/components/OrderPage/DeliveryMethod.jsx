import React from 'react';

const DeliveryMethod = ({ selectedMethod, onMethodChange }) => {
  return (
    <div className="delivery-method-section">
      <h2 className="section-title">
        <span className="icon">🎫</span> Choose your delivery method
      </h2>
      
      <div className="delivery-option">
        <label className="method-label">
          <input
            type="radio"
            name="deliveryMethod"
            checked={selectedMethod === 'e-ticket'}
            onChange={() => onMethodChange('e-ticket')}
          />
          <span className="method-title">E-Ticket</span>
        </label>
        <p className="method-description">
          You will receive a booking confirmation email containing your order details after completing
          the transaction. Your e-ticket(s) will be sent to your registered email address closer to the
          concert.
        </p>
      </div>
    </div>
  );
};

export default DeliveryMethod;