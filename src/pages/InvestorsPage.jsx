import React from 'react';
import { PieChart, ArrowUpRight, ShieldCheck, Globe } from 'lucide-react';
import './Pages.css';

const InvestorsPage = () => {
  return (
    <div className="page-container animate-fade-in">
      <section style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-main)', padding: '8rem 1rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'radial-gradient(circle at right center, var(--color-primary), transparent 50%)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.1 }}>Invest in the Future of Work & Commerce</h1>
            <p className="page-subtitle" style={{ marginLeft: 0, marginBottom: '3rem', lineHeight: 1.5 }}>Join us in building the most comprehensive platform connecting talent, services, and businesses globally.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Download Pitch Deck</button>
              <button className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Contact Relations</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16" style={{ padding: '6rem 1rem' }}>
        <div className="grid-4col" style={{ marginBottom: '6rem' }}>
          <div className="card-item" style={{ borderTop: '4px solid var(--color-primary)' }}>
            <h4 style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Total Funding</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>$45M</div>
          </div>
          <div className="card-item" style={{ borderTop: '4px solid #10b981' }}>
            <h4 style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Valuation</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>$250M</div>
          </div>
          <div className="card-item" style={{ borderTop: '4px solid var(--color-accent)' }}>
            <h4 style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>YoY Growth</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>184%</div>
          </div>
          <div className="card-item" style={{ borderTop: '4px solid #8b5cf6' }}>
            <h4 style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Active Users</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>2.4M</div>
          </div>
        </div>

        <div className="grid-2col" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>Why Invest With Us?</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.7 }}>Our platform is uniquely positioned to capture market share across multiple multi-billion dollar industries by providing a unified ecosystem for employment, services, and B2B/B2C commerce.</p>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '0.5rem', borderRadius: '0.5rem', marginRight: '1rem', color: 'var(--color-primary)' }}><PieChart size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>Diversified Revenue Streams</h4>
                  <p className="text-muted">Subscriptions, transaction fees, and premium advertising create a resilient business model.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '0.5rem', borderRadius: '0.5rem', marginRight: '1rem', color: '#10b981' }}><Globe size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>Global Scalability</h4>
                  <p className="text-muted">Our tech stack allows for rapid deployment in new geographic markets with minimal overhead.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '0.5rem', borderRadius: '0.5rem', marginRight: '1rem', color: 'var(--color-accent)' }}><ShieldCheck size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>Defensible Moat</h4>
                  <p className="text-muted">High switching costs and powerful network effects create significant barriers to entry.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="card-item" style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--color-text-main)' }}>Request Investment Info</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Full Name</label>
                <input type="text" className="search-input" style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Organization</label>
                <input type="text" className="search-input" style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Email Address</label>
                <input type="email" className="search-input" style={{ width: '100%' }} />
              </div>
              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem', width: '100%' }}>Submit Request <ArrowUpRight size={18} style={{ marginLeft: '0.5rem', display: 'inline' }}/></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;
