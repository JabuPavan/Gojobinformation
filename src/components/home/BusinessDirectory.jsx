import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { directoryItems } from '../../data/mockData';
import './HomeComponents.css';

const BusinessDirectory = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container py-8 text-center" style={{ borderTop: '1px solid var(--color-border)' }}>
      <h2 className="section-title">Business Owners Directory</h2>
      <p className="section-subtitle mb-8">Trusted local businesses swipe or click to explore</p>

      <div className="category-cards-wrapper">
        <button className="carousel-arrow prev" onClick={() => scroll('left')}><ChevronLeft size={20}/></button>
        <div className="category-cards" ref={carouselRef}>
          {directoryItems.map((item) => (
            <div key={item.id} className="category-card" style={{ minWidth: '280px', padding: '0', overflow: 'hidden' }}>
              <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--color-surface-hover)', color: 'var(--color-text-main)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem' }}>G</div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>blog</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-accent)' }}>
                  {item.date} | {item.comments}
                </div>
              </div>
              <div style={{ padding: '2rem', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-main)' }}>
                <p>{item.title}</p>
              </div>
              <div style={{ padding: '1rem', borderTop: '1px solid var(--color-border)' }}>
                <button className="btn" style={{ color: 'var(--color-primary)', fontSize: '0.8rem', width: '100%' }}>View Profile &rarr;</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow next" onClick={() => scroll('right')}><ChevronRight size={20}/></button>
      </div>
    </div>
  );
};

export default BusinessDirectory;
