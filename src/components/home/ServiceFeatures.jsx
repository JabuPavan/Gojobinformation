import React from 'react';
import { Check, MapPin } from 'lucide-react';
import './HomeComponents.css';

const ServiceFeatures = () => {
  const features = [
    { title: 'Premium Featured Listing', desc: 'Get your business featured at the top of search results.' },
    { title: 'Customer Reviews & Ratings', desc: 'Build reputation with genuine customer feedback and ratings.' },
    { title: 'Local SEO Optimization', desc: 'Rank higher in local searches and get more customers.' },
    { title: 'Photo & Video Gallery', desc: 'Showcase your products and services with multimedia content.' },
  ];

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];

  return (
    <div className="container py-8">
      <div className="features-grid">
        {/* Left Side: Features */}
        <div>
          <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Gojobinformation Service Features</h2>
          <p className="section-subtitle mb-8">Hover to pause | Auto-scrolling list of our premium services</p>
          
          <div>
            {features.map((feat, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-icon"><Check size={20} /></div>
                <div>
                  <h3 className="feature-title">{feat.title}</h3>
                  <p className="feature-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Map & Why Choose Us */}
        <div>
          <h2 className="section-title" style={{ fontSize: '1.2rem' }}>Find us in your city</h2>
          <p className="section-subtitle mb-4">Click on your city to check service availability</p>
          
          <div className="city-grid mb-8">
            {cities.map((city, idx) => (
              <button key={idx} className="city-btn">
                <MapPin size={14} className="mr-2" /> {city}
              </button>
            ))}
          </div>

          <div style={{ backgroundColor: '#fff5f5', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#ff3b30', marginBottom: '1rem' }}>Why Choose Us?</h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: '#666', textAlign: 'left', display: 'inline-block' }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ Trusted by 1,00,000+ Businesses</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ 4.8 Rating from Verified Users</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ 24/7 Dedicated Support</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ 100% Verified Listings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
