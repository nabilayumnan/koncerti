// src/components/LandingPage/QuickActions.jsx
import React from 'react';

const QuickActions = () => {
  const actions = [
    {
      icon: '🎵',
      title: 'View Lineup',
      description: 'Check out the amazing artists performing'
    },
    {
      icon: '🏠',
      title: 'Explore Event',
      description: 'Discover all event details and information'
    },
    {
      icon: '🎪',
      title: 'Festival Guide',
      description: 'Everything you need to know about the festival'
    }
  ];

  return (
    <section className="quick-actions">
      <div className="container">
        <div className="actions-grid">
          {actions.map((action, index) => (
            <div key={index} className="action-card">
              <div className="action-icon">{action.icon}</div>
              <h3 className="action-title">{action.title}</h3>
              <p className="action-description">{action.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;