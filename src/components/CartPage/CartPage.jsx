// src/pages/CartPage/CartPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';
import Header from '../../components/common/Header';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Load cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
    
    // Calculate totals
    calculateTotals(storedCart);
  }, []);
  
  const calculateTotals = (cartItems) => {
    const calculatedSubtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    const calculatedGst = calculatedSubtotal * 0.08; // Assuming 8% GST
    
    setSubtotal(calculatedSubtotal);
    setGst(calculatedGst);
    setTotal(calculatedSubtotal + calculatedGst);
  };
  
  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    calculateTotals(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  const handleConfirm = () => {
    // Navigate to customer information page
    navigate('/customer-info');
  };
  
  const continueShopping = () => {
    navigate('/passes');
  };
  
  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="continue-button" onClick={continueShopping}>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-details">
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="item-info">
                    <h2>{item.name}</h2>
                    <div className="item-price">${item.price.toFixed(2)}</div>
                    <button 
                      className="remove-button"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="tickets-section">
                    <h3>Tickets</h3>
                    <div className="ticket-detail">
                      <span>{item.quantity} × {item.type === '3day' ? '3-Day' : '1-Day'} • {item.class === 'vip' ? 'VIP' : 'General'} Pass</span>
                      <span>${item.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="delivery-section">
                    <h3>Delivery</h3>
                    <p>
                      E-Ticket - You will receive a booking confirmation email containing
                      your order details after completing the transaction. Your e-ticket(s)
                      will be sent to your registered email address closer to the race.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-summary-box">
              <div className="promo-section">
                <h3>Have a promo code?</h3>
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>
              
              <div className="total-section">
                <h3>Total</h3>
                <div className="tax-row">
                  <div className="tax-label">Tax inclusive:</div>
                  <div className="tax-details">
                    <span>GST</span>
                    <span className="tax-amount">${gst.toFixed(2)}</span>
                  </div>
                </div>
                <div className="total-row">
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button 
                className="continue-shopping-button"
                onClick={continueShopping}
              >
                CONTINUE SHOPPING
              </button>
              
              <button 
                className="confirm-button"
                onClick={handleConfirm}
              >
                CONFIRM
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;