import React, { useRef } from 'react';
import { Search, MapPin, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';
import CandidateSearch from '../components/home/CandidateSearch';
import ReadyToHire from '../components/home/ReadyToHire';
import JobListings from '../components/home/JobListings';
import MeetProfessionals from '../components/home/MeetProfessionals';
import OnlineShopping from '../components/home/OnlineShopping';
import GetMoreCustomers from '../components/home/GetMoreCustomers';
import BusinessDirectory from '../components/home/BusinessDirectory';
import CustomerReviews from '../components/home/CustomerReviews';
import ServiceFeatures from '../components/home/ServiceFeatures';
import Footer from '../components/home/Footer';

const Home = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <div className="category-tabs container">
        <button className="tab active"><Briefcase size={16}/> Jobs</button>
        <button className="tab"><MapPin size={16}/> Services</button>
        <button className="tab"><Briefcase size={16}/> Business</button>
        <button className="tab"><Briefcase size={16}/> Shopping</button>
      </div>

      <div className="search-section container">
        <div className="search-bar">
          <div className="search-input-wrapper location">
            <input type="text" placeholder="Select Location" />
            <ChevronRight className="rotate-90" size={16} color="#ccc" />
          </div>
          <div className="search-input-wrapper keyword">
            <input type="text" placeholder="job title, keywords, or company name" />
          </div>
          <button className="btn btn-primary search-btn">Search Jobs</button>
        </div>
      </div>

      <div className="featured-section container mt-8 mb-8">
        <div className="carousel-card">
          <button className="carousel-nav prev" onClick={() => scroll('left')}><ChevronLeft size={20}/></button>
          
          <div className="carousel-content" ref={carouselRef} style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}>
            <div style={{ minWidth: '100%', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              {/* Added responsive layout container */}
              <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div className="business-logo">
                  <div className="img-placeholder"></div>
                </div>
                <div className="business-info" style={{ textAlign: 'left', maxWidth: '500px' }}>
                  <h3 className="business-name">Business/Company Name</h3>
                  <div className="business-rating">⭐⭐⭐⭐⭐ (4,567 reviews)</div>
                  <a href="#" className="business-link">www.gojobinformation.com</a>
                  <div className="business-phone">+91 9182346989</div>
                  <p className="business-desc">
                    Expert financial services and investment advice to help grow your wealth and secure your financial future.
                  </p>
                  <button className="btn btn-primary mt-4">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-nav next" onClick={() => scroll('right')}><ChevronRight size={20}/></button>
        </div>
        
        <div className="promo-banner mt-4">
          <p>Try 1 Day of Ads — Absolutely Free, Today Only! Grow Your Business with Gojobinformation Ads! Advertisement</p>
          <button className="btn btn-success">Get Started -</button>
        </div>
      </div>

      {/* Inserted Sub-components from Mockups */}
      <CandidateSearch />
      <ReadyToHire />
      <JobListings />
      <MeetProfessionals />
      <OnlineShopping />
      <GetMoreCustomers />
      <BusinessDirectory />
      <CustomerReviews />
      <ServiceFeatures />
      
      {/* Footer Title is now replaced by Footer section */}
      <Footer />

      <div className="chat-widget">
        <button className="chat-btn">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
