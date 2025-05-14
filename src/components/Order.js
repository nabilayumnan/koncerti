// src/components/Order.js

import React, { useState } from 'react';

const Order = () => {
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setTicketQuantity(Number(e.target.value));
  };

  const pricePerTicket = 448.00;
  const totalPrice = pricePerTicket * ticketQuantity;

  return (
    <div className="order-container">
      <h2>Order Tickets</h2>
      <div className="order-summary">
        <div className="ticket-selection">
          <h3>General Pass 3-Day</h3>
          <p>General Admission</p>
          <p>Date: Sun, 5 Oct 2025 3:00 PM</p>
          <p>E-Ticket</p>
        </div>
        <div className="ticket-price">
          <span>Price: ${pricePerTicket}</span>
          <input 
            type="number" 
            value={ticketQuantity} 
            onChange={handleQuantityChange}
            min="1" 
            step="1"
          />
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="customer-info">
        <h3>Customer Information</h3>
        <form>
          <label>
            Full Name:
            <input type="text" required />
          </label>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Phone:
            <input type="tel" required />
          </label>
          <label>
            Nationality:
            <input type="text" required />
          </label>
          <label>
            Place of Residence:
            <input type="text" required />
          </label>
          <label>
            ZIP/Postcode:
            <input type="text" required />
          </label>
        </form>
      </div>

      <button className="confirm-btn">Confirm</button>
    </div>
  );
};

export default Order;
