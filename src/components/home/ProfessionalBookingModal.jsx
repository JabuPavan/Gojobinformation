import React, { useState } from 'react';
import { X, MapPin, Star, Phone, CheckCircle, Calendar, Clock } from 'lucide-react';
import './HomeComponents.css';

const ProfessionalBookingModal = ({ professional, onClose }) => {
  const [step, setStep] = useState('profile'); // 'profile', 'booking', 'success'
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'commercial'
  const [selectedService, setSelectedService] = useState(null);
  const [showPhone, setShowPhone] = useState(false);

  if (!professional) return null;

  const services = activeTab === 'home' ? professional.homePricing : professional.commercialPricing;

  const handleBookClick = (service) => {
    setSelectedService(service);
    setStep('booking');
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        {step === 'profile' && (
          <div className="modal-profile animate-fade-in">
            {/* Header */}
            <div className="modal-header">
              <img src={professional.avatar} alt={professional.name} className="modal-avatar" />
              <div>
                <h2 className="modal-title">{professional.name}</h2>
                <p className="modal-subtitle">{professional.title}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center text-accent" style={{ fontSize: '0.9rem' }}>
                    <Star size={16} className="mr-2" style={{ fill: 'currentColor' }} /> {professional.rating}
                  </span>
                  <span className="flex items-center text-muted" style={{ fontSize: '0.85rem' }}>
                    <MapPin size={14} className="mr-2" /> {professional.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio & Contact */}
            <div className="modal-section">
              <p className="modal-bio">{professional.bio}</p>
              <div className="flex gap-4 mt-4">
                <button 
                  className="btn btn-outline" 
                  onClick={() => setShowPhone(!showPhone)}
                  style={{ flex: 1 }}
                >
                  <Phone size={16} className="mr-2" style={{ display: 'inline' }} />
                  {showPhone ? professional.phone : 'Show Contact Number'}
                </button>
              </div>
            </div>

            {/* Pricing Tabs */}
            <div className="modal-section">
              <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Services & Pricing</h3>
              <div className="pricing-tabs">
                <button 
                  className={`pricing-tab ${activeTab === 'home' ? 'active' : ''}`}
                  onClick={() => setActiveTab('home')}
                >
                  Home Services
                </button>
                <button 
                  className={`pricing-tab ${activeTab === 'commercial' ? 'active' : ''}`}
                  onClick={() => setActiveTab('commercial')}
                >
                  Commercial
                </button>
              </div>

              {/* Service List */}
              <div className="service-list">
                {services && services.length > 0 ? (
                  services.map((item, idx) => (
                    <div key={idx} className="service-item">
                      <div>
                        <h4 className="service-name">{item.service}</h4>
                        <p className="service-price">{item.price}</p>
                      </div>
                      <button className="btn btn-primary btn-sm" onClick={() => handleBookClick(item)}>
                        Book Now
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-muted text-center py-4">No services listed for this category.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 'booking' && (
          <div className="modal-booking animate-fade-in">
            <button className="btn btn-ghost mb-4" onClick={() => setStep('profile')} style={{ padding: 0 }}>
              &larr; Back to Profile
            </button>
            <h2 className="modal-title mb-2">Book Service</h2>
            <div className="booking-summary mb-6">
              <p className="text-muted">You are booking:</p>
              <h3 style={{ color: 'var(--color-primary)' }}>{selectedService?.service}</h3>
              <p className="service-price mt-1">{selectedService?.price}</p>
              <p className="text-sm text-muted mt-2">with {professional.name}</p>
            </div>

            <form onSubmit={handleConfirmBooking} className="booking-form">
              <div className="input-group">
                <label className="input-label"><Calendar size={14} style={{ display: 'inline' }} /> Select Date</label>
                <input type="date" className="input-field" required />
              </div>
              <div className="input-group">
                <label className="input-label"><Clock size={14} style={{ display: 'inline' }} /> Select Time</label>
                <select className="input-field select-field" required>
                  <option value="">Choose a time slot...</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label"><MapPin size={14} style={{ display: 'inline' }} /> Service Address</label>
                <textarea className="input-field" rows="3" placeholder="Enter your full address..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full mt-4" style={{ fontSize: '1rem', padding: '1rem' }}>
                Confirm Booking
              </button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="modal-success animate-fade-in text-center" style={{ padding: '2rem 1rem' }}>
            <CheckCircle size={64} className="text-accent mx-auto mb-4" />
            <h2 className="modal-title mb-2">Booking Confirmed!</h2>
            <p className="text-muted mb-6">
              Your request for <strong>{selectedService?.service}</strong> has been sent to {professional.name}.
            </p>
            <div className="booking-details-card mb-6 text-left">
              <p><strong>Professional:</strong> {professional.name}</p>
              <p><strong>Contact:</strong> {professional.phone}</p>
              <p className="mt-4 text-sm text-muted">You will receive a confirmation call shortly.</p>
            </div>
            <button className="btn btn-primary btn-full" onClick={onClose}>
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProfessionalBookingModal;
