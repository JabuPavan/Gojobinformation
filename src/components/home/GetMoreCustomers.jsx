import React from 'react';
import './HomeComponents.css';

const GetMoreCustomers = () => {
  return (
    <div className="container py-8">
      {/* Banner */}
      <div className="dark-banner mb-8" style={{ padding: '2rem 1rem' }}>
        <h2>Get More Customers with <br/><span className="text-orange">GoJobInformation</span></h2>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>India's No. 1 Local Search Engine<br/>Connecting Businesses with Customers - Instantly</p>
        <button className="btn btn-accent" style={{ padding: '0.5rem 2rem', borderRadius: '20px' }}>Get Started &rarr;</button>
      </div>

      {/* QR Section */}
      <div className="qr-section-wrapper">
        <div className="qr-card-left">
          <div className="flex gap-4">
            <div style={{ flex: 1, backgroundColor: '#fff0e6', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #ffd8c4' }}>
              <p style={{ fontSize: '0.7rem', color: '#666', marginBottom: '0.5rem' }}>Available now on the</p>
              <button className="btn" style={{ backgroundColor: '#ff6b00', color: 'white', fontSize: '0.8rem', padding: '0.5rem 1rem', borderRadius: '20px' }}>Get Started &rarr;</button>
            </div>
            <div style={{ flex: 1, backgroundColor: '#e6ffe6', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #c4ffc4' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#00a651', margin: 0 }}>₹1 <span style={{ fontSize: '0.8rem' }}>only</span></h3>
              <p style={{ fontSize: '0.8rem', fontWeight: 'bold', margin: '0.5rem 0' }}>Businesses Listed</p>
              <p style={{ fontSize: '0.65rem', color: '#00a651' }}>✓ 1 rupee only profile &nbsp; ✓ Verified</p>
            </div>
          </div>
          
          <div className="text-center my-4">
            <a href="#" className="text-orange" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Learn More &rarr;</a>
          </div>

          <div className="stats-row">
            <span>💼 1,00,000+ Businesses Listed</span>
            <span>⭐ 4.8 Rating ★★★★★</span>
            <span>🕒 24/7 Customer Support</span>
          </div>
        </div>

        <div className="qr-card-right">
          <div style={{ textAlign: 'center' }}>
            {/* Placeholder for QR Code */}
            <div style={{ width: '150px', height: '150px', border: '10px solid white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://gojobinformation.com" alt="QR Code" />
            </div>
            <p style={{ fontSize: '0.7rem', marginTop: '1rem', color: '#666' }}>Scan to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMoreCustomers;
