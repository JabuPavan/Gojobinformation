import React from 'react';
import { Quote } from 'lucide-react';
import './HomeComponents.css';

const CustomerReviews = () => {
  const reviews = [
    { role: 'Seeker', text: 'Good information service gojob information', subtext: 'Anywhere anytime' },
    { role: 'Employer', text: 'Good' },
    { role: 'Employer', text: 'Good information services' },
  ];

  return (
    <div className="reviews-section">
      <div className="container">
        <h2 className="section-title" style={{ color: 'white' }}>Customer Reviews</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>What other people thought about the service provided by Gojobinformation</p>

        <div className="review-cards">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card">
              <Quote size={32} className="review-quote-icon" />
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>{rev.role}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: rev.subtext ? '0.5rem' : '0' }}>{rev.text}</p>
              {rev.subtext && <p style={{ fontSize: '0.9rem' }}>{rev.subtext}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
