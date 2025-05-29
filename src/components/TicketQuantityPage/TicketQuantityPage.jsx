// src/pages/TicketQuantityPage/TicketQuantityPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TicketQuantityPage.css';
import Header from '../../components/common/Header';

const TicketQuantityPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [deliveryMethod, setDeliveryMethod] = useState('e-ticket');
  const [quantity, setQuantity] = useState(1);
  const [ticketDetails, setTicketDetails] = useState({
    type: '',
    class: '',
    name: 'General Pass 3-Day',
    price: 430.00 // Updated default price
  });
  const [eventDate] = useState('Sun, 5 Oct 2025 3:00 PM');
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type');
    const ticketClass = searchParams.get('class');
    const price = parseFloat(searchParams.get('price') || '430.00');
    const name = searchParams.get('name') || 'General Pass 3-Day';
    
    if (type && ticketClass) {
      setTicketDetails({
        type,
        class: ticketClass,
        name,
        price
      });
    }
  }, [location]);


  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleConfirm = () => {
    // Get existing cart from localStorage or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Add new ticket to cart
    const newCartItem = {
      ...ticketDetails,
      quantity,
      deliveryMethod,
      totalPrice: ticketDetails.price * quantity
    };
    
    // Check if item of same type and class already exists
    const existingItemIndex = existingCart.findIndex(item => 
      item.type === ticketDetails.type && item.class === ticketDetails.class
    );
    
    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      existingCart[existingItemIndex].quantity += quantity;
      existingCart[existingItemIndex].totalPrice = 
        existingCart[existingItemIndex].price * existingCart[existingItemIndex].quantity;
    } else {
      // Add new item to cart
      existingCart.push(newCartItem);
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Navigate to cart page
    navigate('/cart');
  };

  return (
    <div className="ticket-quantity-page">
      <Header />
      
      <div className="ticket-quantity-container">
        <div className="ticket-quantity-main">
          <div className="delivery-method-section">
            <div className="section-icon">
              <i className="fas fa-ticket-alt"></i>
            </div>
            <h2>Choose your delivery method</h2>
            
            <div className="delivery-option selected">
              <input 
                type="radio" 
                id="e-ticket" 
                name="delivery" 
                checked={deliveryMethod === 'e-ticket'} 
                onChange={() => setDeliveryMethod('e-ticket')}
              />
              <label htmlFor="e-ticket">
                <h3>E-Ticket</h3>
                <p>
                  You will receive a booking confirmation email containing your order 
                  details after completing the transaction. Your e-ticket(s) will be 
                  sent to your registered email address closer to the concert.
                </p>
              </label>
            </div>
          </div>
          
          <div className="promo-code-section">
            <div className="section-icon">
              <i className="fas fa-tag"></i>
            </div>
            <h2>Redeem Promotion</h2>
            <button className="promo-code-button">HAVE A PROMO CODE?</button>
          </div>
          
          <div className="ticket-selection-section">
            <div className="section-icon">
              <i className="fas fa-ticket-alt"></i>
            </div>
            <h2>Select your tickets</h2>
            
            <div className="ticket-row">
              <div className="ticket-info">
                <span className="ticket-name">{ticketDetails.name}</span>
              </div>
              <div className="ticket-price">${ticketDetails.price.toFixed(2)}</div>
              <div className="quantity-selector">
                <button 
                  className="quantity-button decrease" 
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="text" 
                  value={quantity} 
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) {
                      setQuantity(val);
                    }
                  }}
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
          
          <button className="confirm-button" onClick={handleConfirm}>
            CONFIRM
          </button>
        </div>
        
        <div className="order-summary">
          <h2>ORDER SUMMARY</h2>
          <h3>{ticketDetails.name}</h3>
          
          <div className="summary-details">
            <div className="summary-row">
              <i className="fas fa-map-marker-alt"></i>
              <span>{ticketDetails.name}</span>
            </div>
            
            <div className="summary-row">
              <i className="far fa-calendar-alt"></i>
              <span>{eventDate}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="ticket-type">
              <div className="ticket-type-indicator"></div>
              <span>{ticketDetails.type === '3day' ? '3-Day' : 
                     (ticketDetails.type === 'friday' ? 'Friday' : 
                      ticketDetails.type === 'saturday' ? 'Saturday' : 
                      ticketDetails.type === 'sunday' ? 'Sunday' : '3-Day')}</span>
              <span className="ticket-type-desc">
                ({ticketDetails.class === 'vip' ? 'VIP' : 'General Admission'})
              </span>
            </div>
            
            <div className="summary-row">
              <i className="fas fa-ticket-alt"></i>
              <span>E-Ticket</span>
            </div>
            
            <div className="ticket-item">
              <i className="fas fa-file-invoice"></i>
              <span>{ticketDetails.name} × {quantity}</span>
              <span>${(ticketDetails.price * quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketQuantityPage;