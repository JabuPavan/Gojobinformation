import React from 'react';
import { TrendingUp, Users, Target, BarChart } from 'lucide-react';
import './Pages.css';

const BusinessPage = () => {
  const benefits = [
    { title: 'Increase Visibility', description: 'Get your business in front of thousands of potential customers daily.', icon: <Target className="text-primary-color" size={32} /> },
    { title: 'Grow Revenue', description: 'Tap into new markets and increase your sales with our platform.', icon: <TrendingUp className="text-primary-color" size={32} /> },
    { title: 'Manage Leads', description: 'Easily track and communicate with interested clients through our dashboard.', icon: <Users className="text-primary-color" size={32} /> },
    { title: 'Analytics Insights', description: 'Understand your performance with detailed analytics and reports.', icon: <BarChart className="text-primary-color" size={32} /> },
  ];

  return (
    <div className="page-container animate-fade-in">
      {/* Split Hero Section */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '4rem 1rem', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container grid-2col" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'rgba(133, 152, 200, 0.1)', color: 'var(--color-primary)', borderRadius: '999px', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>For Business Owners</span>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: 1.1, color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>Grow Your Business With Us</h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>Join the leading platform connecting quality businesses with local customers. Claim your profile and start growing today.</p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>List Your Business</button>
                <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>View Pricing</button>
              </div>

              <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>10k+</h4>
                  <p className="text-muted">Active Businesses</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>1M+</h4>
                  <p className="text-muted">Monthly Users</p>
                </div>
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/3', backgroundColor: 'var(--color-surface)', borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Business Owner" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: '6rem 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '1rem' }}>Why Join Our Platform?</h2>
            <p className="page-subtitle">We provide all the tools you need to succeed in the digital marketplace.</p>
          </div>

          <div className="grid-cards">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card-item">
                <div style={{ width: '64px', height: '64px', borderRadius: '12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {benefit.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-main)' }}>{benefit.title}</h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
