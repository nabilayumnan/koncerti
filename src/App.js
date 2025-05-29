import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'; 
import PassesPage from './components/PassesPage/PassesPage'; 
import LineupPage from './components/LineupPage/LineupPage'; 
import TicketQuantityPage from './components/TicketQuantityPage/TicketQuantityPage';
import CartPage from './components/CartPage/CartPage';
import CustomerInfoPage from './components/CustomerInfoPage/CustomerInfoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lineup" element={<LineupPage />} />
        <Route path="/passes" element={<PassesPage />} />
        <Route path="/ticket-quantity" element={<TicketQuantityPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/customer-info" element={<CustomerInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;