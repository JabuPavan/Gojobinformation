import React from 'react';
import { Quote } from 'lucide-react';
import { customerReviews } from '../../data/mockData';
import './HomeComponents.css';

const CustomerReviews = () => {
  return (
    <div className="reviews-section">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <p className="section-subtitle" style={{ color: 'var(--color-text-muted)' }}>What other people thought about the service provided by Gojobinformation</p>

        <div className="review-cards">
          {customerReviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <Quote size={32} className="review-quote-icon" />
              <p style={{ fontSize: '0.8rem', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: '600' }}>{rev.role}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: rev.subtext ? '0.5rem' : '0' }}>{rev.text}</p>
              {rev.subtext && <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{rev.subtext}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
