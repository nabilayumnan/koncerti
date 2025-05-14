import React, { useState } from 'react';
import './OrderPage.css';
import Header from '../common/Header';
import DeliveryMethod from './DeliveryMethod';
import PromoCode from './PromoCode';
import TicketSelection from './TicketSelection';
import CustomerInformation from './CustomerInformation';
import OrderSummary from './OrderSummary';

const OrderPage = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('e-ticket');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [eventDate] = useState('Sun, 5 Oct 2025 3:00 PM');
  const [ticketPrice] = useState(448.00);
  const [currentStep, setCurrentStep] = useState(1); // 1: Delivery & Tickets, 2: Customer Info
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phoneCountry: 'Indonesia',
    phoneNumber: '',
    nationality: '',
    residence: ['', '', '', '', '', ''],
    zipCode: ''
  });

  const handleQuantityChange = (newQuantity) => {
    setTicketQuantity(newQuantity);
  };

  const handleDeliveryMethodChange = (method) => {
    setSelectedDeliveryMethod(method);
  };

  const handleCustomerInfoChange = (field, value, index = null) => {
    if (field === 'residence' && index !== null) {
      setCustomerInfo(prev => {
        const newResidence = [...prev.residence];
        newResidence[index] = value;
        return { ...prev, residence: newResidence };
      });
    } else {
      setCustomerInfo(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleConfirm = () => {
    // Here you would typically submit the order to your backend
    console.log('Order submitted:', {
      deliveryMethod: selectedDeliveryMethod,
      ticketQuantity,
      customerInfo,
      totalPrice: ticketPrice * ticketQuantity
    });
    // Redirect to confirmation page or show confirmation modal
    alert('Order confirmed! (This is just a placeholder - implement actual confirmation)');
  };

  return (
    <div className="order-page">
      <Header />
      
      <div className="order-container">
        <div className="order-main">
          {currentStep === 1 ? (
            <>
              <DeliveryMethod 
                selectedMethod={selectedDeliveryMethod}
                onMethodChange={handleDeliveryMethodChange}
              />
              
              <PromoCode />
              
              <TicketSelection 
                quantity={ticketQuantity}
                onQuantityChange={handleQuantityChange}
                price={ticketPrice}
              />
              
              <button 
                className="confirm-button"
                onClick={handleNextStep}
              >
                CONFIRM
              </button>
            </>
          ) : (
            <>
              <CustomerInformation 
                customerInfo={customerInfo}
                onInfoChange={handleCustomerInfoChange}
              />
              
              <button 
                className="confirm-button"
                onClick={handleConfirm}
              >
                CONFIRM
              </button>
            </>
          )}
        </div>
        
        <OrderSummary 
          deliveryMethod={selectedDeliveryMethod}
          eventDate={eventDate}
          quantity={ticketQuantity}
          price={ticketPrice}
        />
      </div>
    </div>
  );
};

export default OrderPage;