// src/components/LandingPage/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import HeroSection from './HeroSection';
import QuickActions from './QuickActions';
import PaymentSection from './PaymentSection';
import VibesSection from './VibesSection';
import AccessSection from './AccessSection';
import SafetySection from './SafetySection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <QuickActions />
      <PaymentSection />
      <VibesSection />
      <AccessSection />
      <SafetySection />
      <Footer />
    </div>
  );
};

export default LandingPage;