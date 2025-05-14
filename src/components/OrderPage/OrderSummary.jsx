import React from 'react';

const OrderSummary = ({ deliveryMethod, eventDate, quantity, price }) => {
  const totalPrice = price * quantity;
  
  return (
    <div className="order-summary">
      <h2 className="summary-title">ORDER SUMMARY</h2>
      
      <div className="summary-content">
        <h3 className="ticket-title">General Pass 3-Day</h3>
        
        <div className="summary-item">
          <span className="item-icon">📍</span>
          <span className="item-text">General Pass 3-Day</span>
        </div>
        
        <div className="summary-item">
          <span className="item-icon">📅</span>
          <span className="item-text">{eventDate}</span>
        </div>
        
        <hr className="summary-divider" />
        
        <div className="ticket-type">
          <span className="ticket-dot"></span>
          <span className="ticket-type-text">3-Day</span>
          <span className="ticket-admission">(General Admission)</span>
        </div>
        
        <div className="summary-item">
          <span className="item-icon">🎫</span>
          <span className="item-text">E-Ticket</span>
        </div>
        
        <div className="ticket-details">
          <span className="ticket-item">General Pass 3-Day x {quantity}</span>
          <span className="ticket-price">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="copyright">
        The Koncerti logo is trademark of Koncerti company, all rights reserved.
      </div>
    </div>
  );
};

export default OrderSummary;