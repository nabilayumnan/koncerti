import React from 'react';

const TicketSelection = ({ quantity, onQuantityChange, price }) => {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      onQuantityChange(value);
    } else if (e.target.value === '') {
      onQuantityChange(1); // Default to 1 if input is cleared
    }
  };

  return (
    <div className="ticket-selection-section">
      <h2 className="section-title">
        <span className="icon">📝</span> Select your tickets
      </h2>
      
      <div className="ticket-row">
        <div className="ticket-info">
          <span className="ticket-name">General Pass 3-Day</span>
        </div>
        
        <div className="price-and-quantity">
          <span className="ticket-price">${price.toFixed(2)}</span>
          
          <div className="quantity-selector">
            <button 
              className="quantity-button decrease"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              −
            </button>
            
            <input
              type="text"
              value={quantity}
              onChange={handleInputChange}
              className="quantity-input"
            />
            
            <button 
              className="quantity-button increase"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;