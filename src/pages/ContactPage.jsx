import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Pages.css';

const ContactPage = () => {
  return (
    <div className="page-container animate-fade-in">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We'd love to hear from you. Please fill out this form or shoot us an email.</p>
      </div>

      <div className="container py-12" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <div className="grid-2col" style={{ alignItems: 'stretch' }}>
          
          {/* Contact Info */}
          <div className="card-item" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--color-text-main)' }}>Get in Touch</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)', marginRight: '1.5rem' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Visit Us</h4>
                  <p className="text-muted" style={{ lineHeight: 1.5 }}>123 Business Avenue<br/>Tech District<br/>San Francisco, CA 94107</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)', marginRight: '1.5rem' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Call Us</h4>
                  <p className="text-muted" style={{ lineHeight: 1.5 }}>+1 (555) 123-4567<br/>Mon-Fri from 8am to 5pm</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)', marginRight: '1.5rem' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Email Us</h4>
                  <p className="text-muted" style={{ lineHeight: 1.5 }}>support@gojobinfo.com<br/>sales@gojobinfo.com</p>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['Twitter', 'LinkedIn', 'Facebook'].map(social => (
                  <a key={social} href="#" className="text-muted" style={{ textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>{social}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-item" style={{ padding: '3rem 2rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--color-text-main)' }}>Send us a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid-2col" style={{ gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>First Name</label>
                  <input type="text" className="search-input" placeholder="John" style={{ width: '100%' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Last Name</label>
                  <input type="text" className="search-input" placeholder="Doe" style={{ width: '100%' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Email</label>
                <input type="email" className="search-input" placeholder="john@example.com" style={{ width: '100%' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Subject</label>
                <input type="text" className="search-input" placeholder="How can we help?" style={{ width: '100%' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Message</label>
                <textarea rows="5" className="search-input" placeholder="Tell us more about your inquiry..." style={{ width: '100%', resize: 'vertical' }}></textarea>
              </div>
              
              <button type="button" className="btn btn-primary" style={{ padding: '1.25rem', fontSize: '1.1rem', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Send Message <Send size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
