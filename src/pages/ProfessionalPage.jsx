import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, MapPin, Star, Phone, Calendar as CalendarIcon, Clock, CheckCircle, CreditCard, Wallet, Banknote, Loader2 } from 'lucide-react';
import { professionals } from '../data/mockData';
import '../components/home/HomeComponents.css'; // Reuse existing styles

const ProfessionalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const proId = parseInt(id, 10);
  
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [proId]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('resume') === 'true') {
      const pendingData = localStorage.getItem('pendingBooking');
      if (pendingData) {
        const data = JSON.parse(pendingData);
        if (data.proId === proId) {
          setSelectedService(data.selectedService);
          setSelectedDate(new Date(data.selectedDate));
          setSelectedTime(data.selectedTime);
          setStep(data.step);
          localStorage.removeItem('pendingBooking');
        }
      }
    }
  }, [location.search, proId]);

  const professional = useMemo(() => professionals.find(p => p.id === proId), [proId]);

  const [step, setStep] = useState('profile'); // 'profile', 'schedule', 'payment', 'success'
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'commercial'
  const [selectedService, setSelectedService] = useState(null);
  const [showPhone, setShowPhone] = useState(false);

  // Scheduling State
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [dates, setDates] = useState([]);

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState('cash'); // 'cash', 'upi', 'card'

  useEffect(() => {
    // Generate next 7 days for the date picker
    const nextDates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      nextDates.push(d);
    }
    setDates(nextDates);
    setSelectedDate(nextDates[0]); // default to today
  }, []);

  if (!professional) {
    return (
      <div className="container py-8 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Professional Not Found</h2>
        <button className="btn btn-outline mt-4" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={48} className="text-primary mx-auto" style={{ animation: 'spin 1s linear infinite' }} />
        <p className="mt-4 text-muted">Loading profile securely...</p>
        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const services = activeTab === 'home' ? professional.homePricing : professional.commercialPricing;

  // Mock Time Slots
  const timeSlots = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: false }, // Busy
    { time: '11:00 AM', available: true },
    { time: '12:30 PM', available: true },
    { time: '02:00 PM', available: false }, // Busy
    { time: '03:30 PM', available: true },
    { time: '05:00 PM', available: true },
    { time: '06:00 PM', available: false }, // Busy
  ];

  const handleBookClick = (service) => {
    setSelectedService(service);
    setStep('schedule');
    window.scrollTo(0, 0);
  };

  const handleConfirmSchedule = () => {
    if (selectedDate && selectedTime) {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        localStorage.setItem('pendingBooking', JSON.stringify({
          proId,
          selectedService,
          selectedDate: selectedDate.getTime(),
          selectedTime,
          step: 'payment'
        }));
        navigate('/login');
        return;
      }
      setStep('payment');
      window.scrollTo(0, 0);
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setStep('success');
    window.scrollTo(0, 0);
  };

  const renderHeader = (title, backAction) => (
    <div style={{ backgroundColor: 'var(--color-surface)', padding: '1rem', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: '0', zIndex: 10, display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <button onClick={backAction} style={{ color: 'var(--color-text-main)' }}>
        <ChevronLeft size={24} />
      </button>
      <h2 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-text-main)', margin: 0 }}>
        {title}
      </h2>
    </div>
  );

  return (
    <div className="professional-page" style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* ---------------- PROFILE STEP ---------------- */}
      {step === 'profile' && (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {renderHeader('Professional Profile', () => navigate(-1))}
          <div className="container py-6">
            <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
              <div className="flex flex-col items-center text-center">
                <img src={professional.avatar} alt={professional.name} style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid var(--color-primary)', marginBottom: '1rem', objectFit: 'cover' }} />
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.2rem' }}>{professional.name}</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>{professional.title}</p>
                <div className="flex items-center gap-4 mt-3" style={{ justifyContent: 'center' }}>
                  <span className="flex items-center text-accent" style={{ fontSize: '0.9rem' }}>
                    <Star size={16} className="mr-1" style={{ fill: 'currentColor' }} /> {professional.rating}
                  </span>
                  <span className="flex items-center text-muted" style={{ fontSize: '0.85rem' }}>
                    <MapPin size={14} className="mr-1" /> {professional.location}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '1.5rem', lineHeight: '1.6' }}>
                  {professional.bio}
                </p>
                
                <button 
                  className="btn btn-outline mt-4 w-full" 
                  onClick={() => setShowPhone(!showPhone)}
                  style={{ width: '100%' }}
                >
                  <Phone size={16} className="mr-2" style={{ display: 'inline' }} />
                  {showPhone ? professional.phone : 'Show Contact Number'}
                </button>
              </div>
            </div>

            <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Services & Pricing</h3>
            <div className="pricing-tabs">
              <button className={`pricing-tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home Services</button>
              <button className={`pricing-tab ${activeTab === 'commercial' ? 'active' : ''}`} onClick={() => setActiveTab('commercial')}>Commercial</button>
            </div>

            <div className="service-list">
              {services && services.length > 0 ? (
                services.map((item, idx) => (
                  <div key={idx} className="service-item" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>
                    <div className="flex justify-between items-start">
                      <h4 className="service-name" style={{ fontSize: '1.05rem', margin: 0 }}>{item.service}</h4>
                      <p className="service-price" style={{ margin: 0, fontSize: '1.1rem' }}>{item.price}</p>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }} onClick={() => handleBookClick(item)}>
                      Select & Schedule
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-muted text-center py-4">No services listed.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- SCHEDULE STEP ---------------- */}
      {step === 'schedule' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {renderHeader('Select Date & Time', () => setStep('profile'))}
          <div className="container py-6" style={{ paddingBottom: '100px' }}>
            <div className="booking-summary mb-6">
              <p className="text-muted text-sm">Service Selected</p>
              <h3 style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', marginTop: '0.2rem' }}>{selectedService?.service}</h3>
              <p className="service-price mt-1">{selectedService?.price}</p>
            </div>

            <h4 style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Choose Date</h4>
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
              {dates.map((d, i) => {
                const isSelected = selectedDate && d.toDateString() === selectedDate.toDateString();
                const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
                const dateNum = d.getDate();
                const month = d.toLocaleDateString('en-US', { month: 'short' });
                
                return (
                  <div 
                    key={i} 
                    onClick={() => setSelectedDate(d)}
                    style={{ 
                      minWidth: '70px', padding: '1rem 0.5rem', textAlign: 'center', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                      border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                      backgroundColor: isSelected ? 'rgba(133, 152, 200, 0.1)' : 'var(--color-surface)'
                    }}
                  >
                    <p style={{ fontSize: '0.8rem', color: isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)', marginBottom: '0.2rem' }}>{dayName}</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)' }}>{dateNum}</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{month}</p>
                  </div>
                )
              })}
            </div>

            <h4 style={{ marginBottom: '1rem', marginTop: '1rem', color: 'var(--color-text-main)' }}>Choose Time Slot</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {timeSlots.map((slot, i) => {
                const isSelected = selectedTime === slot.time;
                return (
                  <button 
                    key={i}
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot.time)}
                    style={{
                      padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', fontWeight: '500',
                      border: '1px solid',
                      borderColor: slot.available 
                        ? (isSelected ? 'var(--color-primary)' : 'var(--color-border)') 
                        : 'rgba(255,255,255,0.05)',
                      backgroundColor: slot.available 
                        ? (isSelected ? 'var(--color-primary)' : 'var(--color-surface)')
                        : 'rgba(255,255,255,0.02)',
                      color: slot.available 
                        ? (isSelected ? '#000' : 'var(--color-text-main)')
                        : 'var(--color-text-muted)',
                      textDecoration: slot.available ? 'none' : 'line-through',
                      opacity: slot.available ? 1 : 0.5
                    }}
                  >
                    {slot.time}
                  </button>
                )
              })}
            </div>

            <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', padding: '1rem', backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
              <button 
                className="btn btn-primary btn-full" 
                style={{ padding: '1rem', fontSize: '1.05rem', opacity: (!selectedDate || !selectedTime) ? 0.5 : 1 }}
                onClick={handleConfirmSchedule}
                disabled={!selectedDate || !selectedTime}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- PAYMENT STEP ---------------- */}
      {step === 'payment' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {renderHeader('Payment & Confirmation', () => setStep('schedule'))}
          <div className="container py-6">
            <div className="booking-summary mb-6">
              <div className="flex justify-between items-start mb-4 pb-4" style={{ borderBottom: '1px dashed var(--color-border)' }}>
                <div>
                  <p className="text-sm text-muted">Service</p>
                  <p style={{ fontWeight: '500', color: 'var(--color-text-main)' }}>{selectedService?.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted">Total Amount</p>
                  <p className="service-price" style={{ fontSize: '1.1rem' }}>{selectedService?.price}</p>
                </div>
              </div>
              <div className="flex gap-2 text-sm text-muted">
                <CalendarIcon size={14} /> 
                {selectedDate?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {selectedTime}
              </div>
            </div>

            <form onSubmit={handleConfirmBooking} style={{ paddingBottom: '80px' }}>
              <div className="input-group mb-6">
                <label className="input-label">Service Address</label>
                <textarea className="input-field" rows="3" placeholder="Enter full address (House no, Street, Landmark)" required></textarea>
              </div>

              <h4 style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Payment Method</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div 
                  onClick={() => setPaymentMethod('cash')}
                  style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderRadius: 'var(--radius-md)', border: `1px solid ${paymentMethod === 'cash' ? 'var(--color-primary)' : 'var(--color-border)'}`, backgroundColor: 'var(--color-surface)' }}
                >
                  <Banknote size={24} style={{ color: paymentMethod === 'cash' ? 'var(--color-primary)' : 'var(--color-text-muted)', marginRight: '1rem' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: '500', color: 'var(--color-text-main)' }}>Pay after service</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Cash or UPI to professional directly</p>
                  </div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid', borderColor: paymentMethod === 'cash' ? 'var(--color-primary)' : 'var(--color-border)', backgroundColor: paymentMethod === 'cash' ? 'var(--color-primary)' : 'transparent' }}></div>
                </div>

                <div 
                  onClick={() => setPaymentMethod('upi')}
                  style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderRadius: 'var(--radius-md)', border: `1px solid ${paymentMethod === 'upi' ? 'var(--color-primary)' : 'var(--color-border)'}`, backgroundColor: 'var(--color-surface)' }}
                >
                  <Wallet size={24} style={{ color: paymentMethod === 'upi' ? 'var(--color-primary)' : 'var(--color-text-muted)', marginRight: '1rem' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: '500', color: 'var(--color-text-main)' }}>Pay via UPI</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>GPay, PhonePe, Paytm</p>
                  </div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid', borderColor: paymentMethod === 'upi' ? 'var(--color-primary)' : 'var(--color-border)', backgroundColor: paymentMethod === 'upi' ? 'var(--color-primary)' : 'transparent' }}></div>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('card')}
                  style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderRadius: 'var(--radius-md)', border: `1px solid ${paymentMethod === 'card' ? 'var(--color-primary)' : 'var(--color-border)'}`, backgroundColor: 'var(--color-surface)' }}
                >
                  <CreditCard size={24} style={{ color: paymentMethod === 'card' ? 'var(--color-primary)' : 'var(--color-text-muted)', marginRight: '1rem' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: '500', color: 'var(--color-text-main)' }}>Credit / Debit Card</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Secure online payment</p>
                  </div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid', borderColor: paymentMethod === 'card' ? 'var(--color-primary)' : 'var(--color-border)', backgroundColor: paymentMethod === 'card' ? 'var(--color-primary)' : 'transparent' }}></div>
                </div>
              </div>

              <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', padding: '1rem', backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
                <button type="submit" className="btn btn-primary btn-full" style={{ padding: '1rem', fontSize: '1.05rem' }}>
                  Confirm & Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------- SUCCESS & ACCEPTANCE STEP ---------------- */}
      {step === 'success' && (
        <div className="container py-8 text-center" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="animate-fade-in">
            <CheckCircle size={80} className="mx-auto mb-6" style={{ color: 'var(--color-accent)' }} />
            <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Booking Accepted!</h2>
            
            <div style={{ backgroundColor: 'rgba(133, 152, 200, 0.1)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-primary)', marginBottom: '2rem', display: 'inline-block', textAlign: 'left' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                <strong>Message from {professional.name}:</strong>
                <br/>"Thank you! I have accepted your booking and will arrive exactly on schedule. Feel free to call me if needed."
              </p>
            </div>

            <div className="booking-details-card mb-8 text-left mx-auto" style={{ maxWidth: '400px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Invoice Summary</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '0.5rem', fontSize: '0.9rem' }}>
                <span className="text-muted">Service:</span>
                <span style={{ fontWeight: '500', color: 'var(--color-text-main)' }}>{selectedService?.service}</span>
                
                <span className="text-muted">Amount:</span>
                <span style={{ fontWeight: '500', color: 'var(--color-accent)' }}>{selectedService?.price}</span>
                
                <span className="text-muted">Date:</span>
                <span style={{ color: 'var(--color-text-main)' }}>{selectedDate?.toLocaleDateString()}</span>
                
                <span className="text-muted">Time:</span>
                <span style={{ color: 'var(--color-text-main)' }}>{selectedTime}</span>
                
                <span className="text-muted">Payment:</span>
                <span style={{ color: 'var(--color-text-main)' }}>
                  {paymentMethod === 'cash' ? 'Pay after service' : (paymentMethod === 'upi' ? 'UPI Online' : 'Card Payment')}
                </span>
              </div>
            </div>

            <button className="btn btn-primary btn-full mx-auto" style={{ maxWidth: '400px', padding: '1rem', fontSize: '1.05rem' }} onClick={() => navigate('/')}>
              Return to Home
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProfessionalPage;
