import React, { useRef } from 'react';
import { GraduationCap, Users, Wifi, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { candidateCategories } from '../../data/mockData';
import './HomeComponents.css';

const CandidateSearch = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderIcon = (type) => {
    const props = { size: 24, className: "text-orange" };
    switch(type) {
      case 'finance': return <GraduationCap {...props} />;
      case 'hr': return <Users {...props} />;
      case 'telecom': return <Wifi {...props} />;
      case 'design': return <Code {...props} />;
      default: return <GraduationCap {...props} />;
    }
  };

  return (
    <div className="candidate-search-section container text-center pt-8 pb-8">
      <h2 className="section-title">Let's hire your next great candidate fast</h2>
      <p className="section-subtitle">Find top talent quickly and efficiently</p>

      <div className="category-cards-wrapper mt-8">
        <button className="carousel-arrow prev" onClick={() => scroll('left')}><ChevronLeft size={20}/></button>
        <div className="category-cards" ref={carouselRef}>
          {candidateCategories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-icon">{renderIcon(cat.iconType)}</div>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-jobs">{cat.jobs}</p>
            </div>
          ))}
        </div>
        <button className="carousel-arrow next" onClick={() => scroll('right')}><ChevronRight size={20}/></button>
      </div>

      <div className="mt-8">
        <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem', borderRadius: '30px' }}>Post a job</button>
      </div>
    </div>
  );
};

export default CandidateSearch;
