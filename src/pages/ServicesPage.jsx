import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Wrench, Droplets, Zap, Fan, Shield, PenTool, CheckCircle } from 'lucide-react';
import './Pages.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  // Mapped to realistic category IDs or paths you might have
  const categories = [
    { id: '1', name: 'Plumbing', icon: <Droplets size={32} />, count: '1,200+ Pros', color: 'var(--color-primary)' },
    { id: '2', name: 'Electrical', icon: <Zap size={32} />, count: '850+ Pros', color: 'var(--color-accent)' },
    { id: '3', name: 'HVAC', icon: <Fan size={32} />, count: '640+ Pros', color: 'var(--color-primary)' },
    { id: '4', name: 'Cleaning', icon: <Home size={32} />, count: '2,100+ Pros', color: 'var(--color-accent)' },
    { id: '5', name: 'Security', icon: <Shield size={32} />, count: '420+ Pros', color: 'var(--color-primary)' },
    { id: '6', name: 'Carpentry', icon: <PenTool size={32} />, count: '930+ Pros', color: 'var(--color-accent)' },
    { id: '7', name: 'Handyman', icon: <Wrench size={32} />, count: '1,500+ Pros', color: 'var(--color-primary)' },
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Home Services</h1>
        <p className="page-subtitle">Find trusted professionals for all your home repair and maintenance needs.</p>
        
        <div className="search-bar" style={{ marginTop: '3rem' }}>
          <input type="text" className="search-input" placeholder="What service do you need?" />
          <button className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontWeight: 'bold' }}>Search</button>
        </div>
      </div>

      <div className="container py-12" style={{ padding: '4rem 1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Meet Our Professionals</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
            <CheckCircle size={24} /> Quality Home Services by Trusted Professionals
          </p>
        </div>

        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--color-text-main)' }}>Popular Categories</h3>
        
        <div className="grid-cards">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="card-item text-center" 
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/category/${cat.id}`)}
            >
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: cat.color, border: '1px solid var(--color-border)' }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>{cat.name}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
