import React, { useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { professionalCategories, professionals } from '../../data/mockData';
import './HomeComponents.css';

const MeetProfessionals = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(professionalCategories[0].id);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredProfessionals = useMemo(() => {
    return professionals.filter(pro => pro.categoryId === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container py-8 text-center" style={{ borderTop: '1px solid var(--color-border)' }}>
      <h2 className="section-title">Meet Our Professionals</h2>
      <p className="section-subtitle mb-8">Quality Home Services by Trusted Professionals</p>

      {/* Categories Carousel */}
      <div className="category-cards-wrapper mb-8">
        <button className="carousel-arrow prev" onClick={() => scroll('left')}><ChevronLeft size={20}/></button>
        <div className="category-cards" ref={carouselRef} style={{ gap: '1rem' }}>
          {professionalCategories.map((cat) => (
            <div 
              key={cat.id} 
              className={`category-card ${selectedCategory === cat.id ? 'active-category' : ''}`} 
              style={{ minWidth: '140px', padding: '1.5rem 1rem' }}
              onClick={() => {
                setSelectedCategory(cat.id);
                // Also navigate to category page (external route)
                navigate(`/category/${cat.id}`);
              }}
            >
              <div className="category-icon" style={{ fontSize: '2rem' }}>{cat.icon}</div>
              <h3 className="category-name">{cat.name}</h3>
            </div>
          ))}
        </div>
        <button className="carousel-arrow next" onClick={() => scroll('right')}><ChevronRight size={20}/></button>
      </div>

    </div>
  );
};

export default MeetProfessionals;
