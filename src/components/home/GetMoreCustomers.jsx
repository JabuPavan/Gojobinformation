import React from 'react';
import './HomeComponents.css';

const GetMoreCustomers = () => {
  return (
    <div className="container py-8">
      {/* Banner */}
      <div className="dark-banner mb-8">
        <h2>Get More Customers with <br/><span className="text-orange">GoJobInformation</span></h2>
        <p>India's No. 1 Local Search Engine<br/>Connecting Businesses with Customers - Instantly</p>
        <button className="btn btn-accent" style={{ padding: '0.8rem 2.5rem', borderRadius: '30px', fontSize: '1rem' }}>Get Started &rarr;</button>
      </div>

      {/* QR Section */}
      <div className="qr-section-wrapper">
        <div className="qr-card-left">
          <div className="flex gap-4">
            <div style={{ flex: 1, backgroundColor: 'rgba(14, 165, 233, 0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid var(--color-primary)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '0 0 1rem 0' }}>Available now on the app</p>
              <button className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.5rem', borderRadius: '20px' }}>Get Started &rarr;</button>
            </div>
            <div style={{ flex: 1, backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', margin: 0 }}>₹1 <span style={{ fontSize: '0.8rem' }}>only</span></h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: '0.5rem 0', color: 'var(--color-text-main)' }}>Businesses Listed</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)' }}>✓ 1 rupee profile &nbsp; ✓ Verified</p>
            </div>
          </div>
          
          <div className="text-center my-4">
            <a href="#" className="text-orange" style={{ fontSize: '0.95rem', fontWeight: '600' }}>Learn More About Our Plans &rarr;</a>
          </div>

          <div className="stats-row">
            <span>💼 1,00,000+ Businesses Listed</span>
            <span>⭐ 4.8 Rating ★★★★★</span>
            <span>🕒 24/7 Customer Support</span>
          </div>
        </div>

        <div className="qr-card-right">
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '160px', height: '160px', border: '10px solid var(--color-surface-hover)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://gojobinformation.com&color=0ea5e9&bgcolor=1e293b" alt="QR Code" style={{ width: '100%', height: '100%' }} />
            </div>
            <p style={{ fontSize: '0.8rem', marginTop: '1.5rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>Scan to get started instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMoreCustomers;
