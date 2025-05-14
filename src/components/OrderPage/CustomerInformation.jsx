import React from 'react';

const CustomerInformation = ({ customerInfo, onInfoChange }) => {
  const residenceFields = [
    "Address Line 1",
    "Address Line 2 (Optional)",
    "City",
    "State/Province",
    "Country",
    "Building/Apartment (Optional)"
  ];
  
  return (
    <div className="customer-information-section">
      <h2 className="section-title">
        <span className="icon">📋</span> Customer Information
      </h2>
      
      <div className="form-group">
        <label htmlFor="fullName">Full Name*</label>
        <input
          type="text"
          id="fullName"
          value={customerInfo.fullName}
          onChange={(e) => onInfoChange('fullName', e.target.value)}
          className="form-input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          value={customerInfo.email}
          onChange={(e) => onInfoChange('email', e.target.value)}
          className="form-input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone*</label>
        <div className="phone-input-group">
          <select
            id="phoneCountry"
            value={customerInfo.phoneCountry}
            onChange={(e) => onInfoChange('phoneCountry', e.target.value)}
            className="country-select"
          >
            <option value="Indonesia">Indonesia</option>
            {/* Add other countries as needed */}
          </select>
          
          <div className="phone-number-container">
            <span className="country-code">+62</span>
            <input
              type="tel"
              id="phoneNumber"
              value={customerInfo.phoneNumber}
              onChange={(e) => onInfoChange('phoneNumber', e.target.value)}
              className="phone-input"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="nationality">Nationality*</label>
        <input
          type="text"
          id="nationality"
          value={customerInfo.nationality}
          onChange={(e) => onInfoChange('nationality', e.target.value)}
          className="form-input"
          required
        />
      </div>
      
      {residenceFields.map((label, index) => (
        <div className="form-group" key={`residence-${index}`}>
          <label htmlFor={`residence-${index}`}>
            {label}{!label.includes('Optional') && '*'}
          </label>
          <input
            type="text"
            id={`residence-${index}`}
            value={customerInfo.residence[index]}
            onChange={(e) => onInfoChange('residence', e.target.value, index)}
            className="form-input"
            required={!label.includes('Optional')}
          />
        </div>
      ))}
      
      <div className="form-group">
        <label htmlFor="zipCode">ZIP/Postal Code*</label>
        <input
          type="text"
          id="zipCode"
          value={customerInfo.zipCode}
          onChange={(e) => onInfoChange('zipCode', e.target.value)}
          className="form-input"
          required
        />
      </div>
    </div>
  );
};

export default CustomerInformation;