import React from 'react';
import { Briefcase, Search, Home, Shield, Leaf, LayoutGrid } from 'lucide-react';
import './HomeComponents.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        {/* For Job Seekers */}
        <div className="footer-section">
          <h3 className="section-title" style={{ fontSize: '1.2rem' }}>For Job Seekers</h3>
          <p className="section-subtitle">Find your dream job with GoJobInformation</p>
          
          <div className="footer-cards">
            <div className="footer-card">
              <Briefcase size={24} color="#ff3b30" className="mb-4" />
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Job Search Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: '#666' }}>
                <li style={{ marginBottom: '0.5rem' }}>🔍 Search and apply for jobs across multiple industries</li>
                <li style={{ marginBottom: '0.5rem' }}>📄 Upload resumes and create professional profiles</li>
                <li style={{ marginBottom: '0.5rem' }}>📊 Track job applications and hiring status</li>
                <li style={{ marginBottom: '0.5rem' }}>⭐ Access opportunities for full-time, part-time, and freelance work</li>
              </ul>
            </div>
            <div className="footer-card">
              <LayoutGrid size={24} color="#ff3b30" className="mb-4" />
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Popular Job Categories</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {['Security Guard', 'Electrician', 'Data Entry', 'Packing Staff', 'Maintenance', 'Driver', 'Teacher', 'Sales Executive', 'Customer Support', 'Delivery Boy', 'Housekeeping', 'Office Assistant'].map((tag, i) => (
                  <span key={i} style={{ backgroundColor: '#e6ffe6', color: '#00a651', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem' }}>{tag}</span>
                ))}
              </div>
              <button className="btn" style={{ backgroundColor: '#ff3b80', color: 'white', fontSize: '0.8rem', padding: '0.4rem 1.5rem', borderRadius: '20px' }}>Search Jobs &rarr;</button>
            </div>
          </div>
        </div>

        {/* For Employers */}
        <div className="footer-section" style={{ borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <h3 className="section-title" style={{ fontSize: '1.2rem' }}>For Employers</h3>
          <p className="section-subtitle">Hire the best talent with our recruitment solutions</p>
          
          <div className="footer-cards employer-cards">
            <div className="footer-card">
              <div style={{ color: '#ff3b30', marginBottom: '1rem', fontSize: '1.5rem' }}>G</div>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Free Job Posting</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Free job posting options to reach thousands of active job seekers.</p>
            </div>
            <div className="footer-card">
              <UsersIcon />
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Candidate Search</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Candidate search and recruitment tools with access to job seeker databases.</p>
            </div>
            <div className="footer-card">
              <div style={{ color: '#ff3b30', marginBottom: '1rem' }}><Briefcase size={24}/></div>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Applicant Management</h4>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>Applicant management and hiring support for multiple industries.</p>
            </div>
          </div>
          <div className="text-center mt-4">
             <button className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.4rem 1.5rem' }}>Post a Job &rarr;</button>
          </div>
        </div>

        {/* Home & Professional Services */}
        <div className="footer-section" style={{ borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <h3 className="section-title" style={{ fontSize: '1.2rem' }}>Home & Professional Services</h3>
          <p className="section-subtitle">Find and book trusted service providers near you</p>
          
          <div className="footer-cards service-cards">
            <div className="footer-card text-center">
              <Home size={32} color="#ff3b30" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontWeight: 600, fontSize: '0.9rem' }}>Home Services</h4>
              <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>✓ Home Cleaning</p>
            </div>
            <div className="footer-card text-center">
              <div style={{ color: '#ff3b30', fontSize: '2rem', margin: '0 auto 1rem auto' }}>🖌</div>
              <h4 style={{ fontWeight: 600, fontSize: '0.9rem' }}>Renovation & More</h4>
              <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>✓ Painting</p>
            </div>
            <div className="footer-card text-center">
              <Shield size={32} color="#ff3b30" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontWeight: 600, fontSize: '0.9rem' }}>Security & Events</h4>
              <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>✓ Security Services</p>
            </div>
            <div className="footer-card text-center">
              <Leaf size={32} color="#ff3b30" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontWeight: 600, fontSize: '0.9rem' }}>Outdoor Services</h4>
              <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>✓ Gardening Services</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

const UsersIcon = () => (
  <div style={{ color: '#ff3b30', marginBottom: '1rem' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </div>
);

export default Footer;
