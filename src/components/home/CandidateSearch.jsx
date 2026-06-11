import React, { useRef } from 'react';
import { GraduationCap, Users, Wifi, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import './HomeComponents.css';

const CandidateSearch = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = [
    { icon: <GraduationCap size={24} className="text-orange" />, name: 'Accounting/Finance', jobs: '0 open positions' },
    { icon: <Users size={24} className="text-orange" />, name: 'Human Resource', jobs: '0 open positions' },
    { icon: <Wifi size={24} className="text-orange" />, name: 'Telecommunication', jobs: '1 open positions' },
    { icon: <Code size={24} className="text-orange" />, name: 'Design/Creative', jobs: '1 open positions' },
  ];

  return (
    <div className="candidate-search-section container text-center pt-8 pb-8">
      <h2 className="section-title">Let's hire your next great candidate fast</h2>
      <p className="section-subtitle">Let's hire your next great candidate. Fas</p>

      <div className="category-cards-wrapper mt-8">
        <button className="carousel-arrow prev" onClick={() => scroll('left')}><ChevronLeft size={20}/></button>
        <div className="category-cards" ref={carouselRef}>
          {categories.map((cat, idx) => (
            <div key={idx} className="category-card">
              <div className="category-icon">{cat.icon}</div>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-jobs">{cat.jobs}</p>
            </div>
          ))}
        </div>
        <button className="carousel-arrow next" onClick={() => scroll('right')}><ChevronRight size={20}/></button>
      </div>

      <div className="mt-8">
        <button className="btn btn-outline">Post a job</button>
      </div>
    </div>
  );
};

export default CandidateSearch;
