import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import './HomeComponents.css';

const MeetProfessionals = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = [
    { icon: '🧹', name: 'Home Cleaning' },
    { icon: '⚡', name: 'Electrician' },
    { icon: '🚰', name: 'Plumber' },
    { icon: '🧘', name: 'Yoga Training' },
  ];

  const professionals = [
    { name: 'Mallesh', title: 'Electrician', rating: '4.7', avatar: 'https://i.pravatar.cc/150?img=11', isGold: true },
    { name: 'Krishna', title: 'Electrician', rating: '4.7', avatar: 'https://i.pravatar.cc/150?img=12', isGold: true },
    { name: 'Shekar', title: 'Beauty Services', rating: '4.7', avatar: 'https://i.pravatar.cc/150?img=13', isGold: true },
    { name: 'Mallesh yadav', title: 'Electrician', rating: '4.7', avatar: 'https://i.pravatar.cc/150?img=14', isGold: true },
  ];

  return (
    <div className="container py-8 text-center border-top">
      <h2 className="section-title">Meet Our Professionals</h2>
      <p className="section-subtitle mb-8">Quality Home Services by Trusted Professionals</p>

      {/* Categories */}
      <div className="category-cards-wrapper mb-8">
        <button className="carousel-arrow prev" onClick={() => scroll('left')}><ChevronLeft size={20}/></button>
        <div className="category-cards" ref={carouselRef}>
          {categories.map((cat, idx) => (
            <div key={idx} className="category-card" style={{ minWidth: '150px' }}>
              <div className="category-icon" style={{ fontSize: '2rem' }}>{cat.icon}</div>
              <h3 className="category-name">{cat.name}</h3>
            </div>
          ))}
        </div>
        <button className="carousel-arrow next" onClick={() => scroll('right')}><ChevronRight size={20}/></button>
      </div>

      <div className="mb-8">
        <button className="btn" style={{ backgroundColor: '#ff3b80', color: 'white', borderRadius: '20px', padding: '0.6rem 2rem' }}>
          Register As A Work Professionals
        </button>
      </div>

      {/* Professional Profiles */}
      <div className="flex justify-center gap-6 flex-wrap mt-8">
        {professionals.map((pro, idx) => (
          <div key={idx} className="pro-card">
            <div className="pro-avatar">
              <img src={pro.avatar} alt={pro.name} />
            </div>
            <h3 className="pro-name">{pro.name}</h3>
            <p className="pro-title">{pro.title}</p>
            <p className="pro-rating">⭐⭐⭐⭐⭐ ({pro.rating})</p>
            {pro.isGold && <span className="pro-badge">Gold</span>}
            <button className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '0.3rem 1rem', width: '100%', marginTop: '0.5rem', borderRadius: '4px' }}>
              <Phone size={10} className="mr-2" style={{display: 'inline'}} /> Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetProfessionals;
