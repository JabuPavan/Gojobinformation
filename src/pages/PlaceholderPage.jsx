import React from 'react';
import { useLocation } from 'react-router-dom';

const PlaceholderPage = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  const title = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="container py-8 text-center animate-fade-in" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', width: '100%', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>{title}</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>This page is currently under construction. Check back soon for updates!</p>
        <button onClick={() => window.history.back()} className="btn btn-primary mt-8">Go Back</button>
      </div>
    </div>
  );
};

export default PlaceholderPage;
