import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Heart, FileText, Settings, LogOut, ChevronRight } from 'lucide-react';
import '../components/home/HomeComponents.css';

const UserProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings'); // bookings, details, drafts, liked

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'bookings':
        return (
          <div className="animate-fade-in">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>My Bookings & History</h3>
            
            <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1rem' }}>
              <div className="flex justify-between items-start mb-3 pb-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <div>
                  <span style={{ backgroundColor: 'rgba(133, 152, 200, 0.2)', color: 'var(--color-primary)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>UPCOMING</span>
                  <h4 style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: 'var(--color-text-main)' }}>Electrician - Ceiling Fan Installation</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Mallesh Yadav • Madhapur, Hyderabad</p>
                </div>
                <div className="text-right">
                  <p style={{ fontSize: '1.1rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>₹250</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span style={{ color: 'var(--color-text-muted)' }}>Scheduled for: <strong>Tomorrow, 11:00 AM</strong></span>
                <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Reschedule</button>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', opacity: 0.7 }}>
              <div className="flex justify-between items-start mb-3 pb-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <div>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--color-text-muted)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>COMPLETED</span>
                  <h4 style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: 'var(--color-text-main)' }}>Plumber - Tap Leakage Repair</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Ramesh Singh • Kukatpally, Hyderabad</p>
                </div>
                <div className="text-right">
                  <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', fontWeight: 'bold' }}>₹200</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span style={{ color: 'var(--color-text-muted)' }}>Completed on: <strong>12 May 2024</strong></span>
                <button className="btn btn-ghost" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>View Invoice</button>
              </div>
            </div>
          </div>
        );
      case 'details':
        return (
          <div className="animate-fade-in">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>Profile Details</h3>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input type="text" className="input-field" defaultValue="Pavan Kumar" />
              </div>
              <div className="input-group">
                <label className="input-label">Mobile Number</label>
                <input type="tel" className="input-field" defaultValue="+91 9876543210" disabled style={{ opacity: 0.7 }} />
              </div>
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input type="email" className="input-field" placeholder="Add email address" />
              </div>
              <div className="input-group">
                <label className="input-label">Saved Address</label>
                <textarea className="input-field" rows="3" defaultValue="12-4, Cyber Towers Road, Hitec City, Hyderabad, Telangana"></textarea>
              </div>
              <button className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '0.8rem 2rem' }}>Save Changes</button>
            </form>
          </div>
        );
      case 'drafts':
        return (
          <div className="animate-fade-in text-center py-8">
            <FileText size={48} style={{ margin: '0 auto 1rem auto', color: 'var(--color-border)' }} />
            <h3 style={{ color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>Your Cart & Drafts</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>You have no pending items or paused bookings.</p>
            <button onClick={() => navigate('/')} className="btn btn-outline mt-4">Browse Services</button>
          </div>
        );
      case 'liked':
        return (
          <div className="animate-fade-in text-center py-8">
            <Heart size={48} style={{ margin: '0 auto 1rem auto', color: 'var(--color-border)' }} />
            <h3 style={{ color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>Liked Things</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Professionals or jobs you save will appear here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Dashboard Header */}
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem 1rem', borderBottom: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1rem auto' }}>
          P
        </div>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)', marginBottom: '0.2rem' }}>Pavan Kumar</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>+91 9876543210</p>
      </div>

      <div className="container py-6">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          
          {/* Sidebar / Tabs on Desktop, horizontal on Mobile */}
          <div style={{ display: 'flex', overflowX: 'auto', gap: '0.5rem', paddingBottom: '1rem', scrollbarWidth: 'none', borderBottom: '1px solid var(--color-border)' }}>
            <button onClick={() => setActiveTab('bookings')} style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap', borderBottom: activeTab === 'bookings' ? '2px solid var(--color-primary)' : '2px solid transparent', color: activeTab === 'bookings' ? 'var(--color-primary)' : 'var(--color-text-muted)', fontWeight: activeTab === 'bookings' ? '600' : '400' }}>
              <Calendar size={16} className="inline mr-2" /> Bookings
            </button>
            <button onClick={() => setActiveTab('details')} style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap', borderBottom: activeTab === 'details' ? '2px solid var(--color-primary)' : '2px solid transparent', color: activeTab === 'details' ? 'var(--color-primary)' : 'var(--color-text-muted)', fontWeight: activeTab === 'details' ? '600' : '400' }}>
              <User size={16} className="inline mr-2" /> Details
            </button>
            <button onClick={() => setActiveTab('drafts')} style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap', borderBottom: activeTab === 'drafts' ? '2px solid var(--color-primary)' : '2px solid transparent', color: activeTab === 'drafts' ? 'var(--color-primary)' : 'var(--color-text-muted)', fontWeight: activeTab === 'drafts' ? '600' : '400' }}>
              <FileText size={16} className="inline mr-2" /> Cart/Drafts
            </button>
            <button onClick={() => setActiveTab('liked')} style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap', borderBottom: activeTab === 'liked' ? '2px solid var(--color-primary)' : '2px solid transparent', color: activeTab === 'liked' ? 'var(--color-primary)' : 'var(--color-text-muted)', fontWeight: activeTab === 'liked' ? '600' : '400' }}>
              <Heart size={16} className="inline mr-2" /> Liked
            </button>
          </div>

          {/* Main Content Area */}
          <div style={{ minHeight: '400px' }}>
            {renderTabContent()}
          </div>

        </div>
      </div>

    </div>
  );
};

export default UserProfile;
