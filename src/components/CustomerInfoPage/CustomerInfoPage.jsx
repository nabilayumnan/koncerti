// src/pages/CustomerInfoPage/CustomerInfoPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerInfoPage.css';
import Header from '../../components/common/Header';

const CustomerInfoPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phoneCountry: 'Indonesia',
    phoneNumber: '',
    nationality: '',
    residence1: '',
    residence2: '',
    residence3: '',
    residence4: '',
    residence5: '',
    residence6: '',
    zipCode: ''
  });
  
  useEffect(() => {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (storedCart.length === 0) {
      // Redirect to cart if empty
      navigate('/cart');
      return;
    }
    setCart(storedCart);
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value
    });
  };

  const handleConfirm = () => {
    // Validate form
    const requiredFields = ['fullName', 'email', 'phoneNumber', 'nationality', 'residence1'];
    const missingFields = requiredFields.filter(field => !customerInfo[field]);
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Process order
    const order = {
      cart,
      customerInfo,
      orderDate: new Date().toISOString(),
      totalAmount: cart.reduce((sum, item) => sum + item.totalPrice, 0)
    };
    
    console.log('Order processed:', order);
    
    // In a real app, you'd send this to your backend
    
    // Clear cart
    localStorage.removeItem('cart');
    
    // Navigate to confirmation page or home
    alert('Thank you for your order! Your tickets will be emailed to you.');
    navigate('/');
  };

  return (
    <div className="customer-info-page">
      <Header />
      
      <div className="info-container">
        <div className="info-main">
          <div className="customer-info-section">
            <div className="section-icon">
              <i className="fas fa-user"></i>
            </div>
            <h2>Customer Information</h2>
            
            <form className="info-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={customerInfo.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone*</label>
                <div className="phone-input">
                  <select
                    name="phoneCountry"
                    value={customerInfo.phoneCountry}
                    onChange={handleInputChange}
                  >
                    <option value="Indonesia">Indonesia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Malaysia">Malaysia</option>
                  </select>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={customerInfo.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="nationality">Nationality*</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={customerInfo.nationality}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="residence1">Place of Residence*</label>
                <input
                  type="text"
                  id="residence1"
                  name="residence1"
                  value={customerInfo.residence1}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="residence2">Place of Residence*</label>
                <input
                  type="text"
                  id="residence2"
                  name="residence2"
                  value={customerInfo.residence2}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={customerInfo.zipCode}
                  onChange={handleInputChange}
                />
              </div>
            </form>
            
            <button className="confirm-button" onClick={handleConfirm}>
              CONFIRM
            </button>
          </div>
        </div>
        
        <div className="order-summary">
          <h2>ORDER SUMMARY</h2>
          <h3>{cart[0]?.name || 'Festival Pass'}</h3>
          
          <div className="summary-details">
            <div className="summary-row">
              <i className="fas fa-map-marker-alt"></i>
              <span>{cart[0]?.name || 'General Pass 3-Day'}</span>
            </div>
            
            <div className="summary-row">
              <i className="far fa-calendar-alt"></i>
              <span>Sun, 5 Oct 2025 3:00 PM</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="ticket-type">
              <div className="ticket-type-indicator"></div>
              <span>{cart[0]?.type === '3day' ? '3-Day' : (cart[0]?.type || '3-Day')}</span>
              <span className="ticket-type-desc">
                ({cart[0]?.class === 'vip' ? 'VIP' : 'General Admission'})
              </span>
            </div>
            
            <div className="summary-row">
              <i className="fas fa-ticket-alt"></i>
              <span>E-Ticket</span>
            </div>
            
            {cart.map((item, index) => (
              <div className="ticket-item" key={index}>
                <i className="fas fa-file-invoice"></i>
                <span>{item.name} × {item.quantity}</span>
                <span>${item.totalPrice.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoPage;