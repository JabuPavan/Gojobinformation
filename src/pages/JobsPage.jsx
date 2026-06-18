import React from 'react';
import { Briefcase, Search, MapPin, Building2, Clock } from 'lucide-react';
import './Pages.css';

const JobsPage = () => {
  const jobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp', location: 'Remote', type: 'Full-time', salary: '$120k - $150k' },
    { id: 2, title: 'Marketing Manager', company: 'GrowthX', location: 'New York, NY', type: 'Full-time', salary: '$90k - $110k' },
    { id: 3, title: 'UI/UX Designer', company: 'CreativeStudio', location: 'London, UK', type: 'Contract', salary: '$60 - $80/hr' },
    { id: 4, title: 'Data Scientist', company: 'DataGen', location: 'San Francisco, CA', type: 'Full-time', salary: '$130k - $160k' },
  ];

  return (
    <div className="page-container animate-fade-in">
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Find Your Dream Job Today</h1>
          <p className="page-subtitle" style={{ marginBottom: '3rem' }}>
            Browse thousands of job openings from top companies and start your new career journey.
          </p>
          
          <div className="search-bar">
            <div className="flex-center" style={{ flex: 1 }}>
              <Search className="text-muted" size={20} style={{ marginRight: '0.5rem' }} />
              <input type="text" className="search-input" placeholder="Job title, keyword, or company" style={{ border: 'none', backgroundColor: 'transparent' }} />
            </div>
            <div className="flex-center" style={{ flex: 1 }}>
              <MapPin className="text-muted" size={20} style={{ marginRight: '0.5rem' }} />
              <input type="text" className="search-input" placeholder="City, state, or zip" style={{ border: 'none', backgroundColor: 'transparent' }} />
            </div>
            <button className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Search</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12" style={{ padding: '4rem 1rem' }}>
        <div className="flex-center justify-between" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-text-main)' }}>Featured Jobs</h2>
          <span style={{ color: 'var(--color-primary)', fontWeight: '500', cursor: 'pointer' }}>View all jobs →</span>
        </div>

        <div className="grid-cards">
          {jobs.map((job) => (
            <div key={job.id} className="card-item">
              <div className="flex-center justify-between" style={{ marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
                  <Briefcase className="text-primary-color" size={24} />
                </div>
                <span style={{ backgroundColor: 'rgba(133, 152, 200, 0.1)', color: 'var(--color-primary)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: '500' }}>{job.type}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>{job.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                <div className="flex-center text-muted" style={{ fontSize: '0.9rem' }}>
                  <Building2 size={16} style={{ marginRight: '0.5rem' }} /> {job.company}
                </div>
                <div className="flex-center text-muted" style={{ fontSize: '0.9rem' }}>
                  <MapPin size={16} style={{ marginRight: '0.5rem' }} /> {job.location}
                </div>
                <div className="flex-center text-muted" style={{ fontSize: '0.9rem' }}>
                  <Clock size={16} style={{ marginRight: '0.5rem' }} /> {job.salary}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                <button className="btn btn-outline btn-full">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobsPage;
