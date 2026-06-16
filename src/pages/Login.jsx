import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Smartphone, KeyRound, CheckCircle } from 'lucide-react';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('initial'); // 'initial', 'otp', 'password', 'success'
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthComplete = () => {
    localStorage.setItem('isLoggedIn', 'true');
    const pendingBooking = localStorage.getItem('pendingBooking');
    if (pendingBooking) {
      const data = JSON.parse(pendingBooking);
      navigate(`/professional/${data.proId}?resume=true`);
    } else {
      navigate('/profile');
    }
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (mobile.length >= 10) setStep('otp');
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp.length >= 4) setStep('password');
  };

  const handleCreatePassword = (e) => {
    e.preventDefault();
    if (password.length >= 6) {
      setStep('success');
      setTimeout(handleAuthComplete, 1500);
    }
  };

  const handleGoogleLogin = () => {
    setStep('success');
    setTimeout(handleAuthComplete, 1500);
  };

  return (
    <div className="auth-container animate-fade-in" style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="auth-card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem 2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        
        {step !== 'success' && (
          <div className="auth-header text-center mb-6">
            <div className="logo-icon-large mx-auto mb-4" style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-primary)', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>G</div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
              {step === 'initial' && 'Welcome Back'}
              {step === 'otp' && 'Verify Mobile'}
              {step === 'password' && 'Secure Your Profile'}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              {step === 'initial' && 'Login to your Gojobinformation account'}
              {step === 'otp' && `OTP sent to ${mobile}`}
              {step === 'password' && 'Create a password for future logins'}
            </p>
          </div>
        )}

        {step === 'initial' && (
          <>
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-full mb-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem', fontSize: '1rem', backgroundColor: '#fff', color: '#000', border: 'none' }}>
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" style={{ width: '20px' }} />
              Continue with Google
            </button>
            
            <div className="flex items-center gap-4 mb-6" style={{ color: 'var(--color-text-muted)' }}>
              <hr style={{ flex: 1, borderColor: 'var(--color-border)' }} />
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>or</span>
              <hr style={{ flex: 1, borderColor: 'var(--color-border)' }} />
            </div>

            <form className="auth-form" onSubmit={handleSendOTP}>
              <div className="input-group mb-4">
                <label className="input-label" style={{ color: 'var(--color-text-main)' }}>Mobile Number</label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.5rem 1rem', backgroundColor: 'var(--color-bg)' }}>
                  <Smartphone size={18} className="text-muted mr-2" />
                  <span style={{ marginRight: '0.5rem', color: 'var(--color-text-muted)' }}>+91</span>
                  <input 
                    type="tel" 
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    style={{ border: 'none', background: 'transparent', color: 'var(--color-text-main)', width: '100%', outline: 'none', fontSize: '1rem' }} 
                    placeholder="Enter 10-digit number" 
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-full" style={{ padding: '0.8rem', fontSize: '1rem' }}>
                Get OTP
              </button>
            </form>
          </>
        )}

        {step === 'otp' && (
          <form className="auth-form" onSubmit={handleVerifyOTP}>
            <div className="input-group mb-4">
              <label className="input-label" style={{ color: 'var(--color-text-main)', textAlign: 'center' }}>Enter 4-digit OTP</label>
              <input 
                type="text" 
                required
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--color-bg)', color: 'var(--color-text-main)', outline: 'none', fontSize: '1.5rem', textAlign: 'center', letterSpacing: '0.5rem' }} 
                placeholder="••••" 
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full" style={{ padding: '0.8rem', fontSize: '1rem' }}>
              Verify OTP
            </button>
            <p className="text-center mt-4 text-sm text-primary" style={{ cursor: 'pointer' }} onClick={() => setStep('initial')}>Change Mobile Number</p>
          </form>
        )}

        {step === 'password' && (
          <form className="auth-form" onSubmit={handleCreatePassword}>
            <div className="input-group mb-4">
              <label className="input-label" style={{ color: 'var(--color-text-main)' }}>Create Profile Password</label>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.5rem 1rem', backgroundColor: 'var(--color-bg)' }}>
                <KeyRound size={18} className="text-muted mr-2" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: 'none', background: 'transparent', color: 'var(--color-text-main)', width: '100%', outline: 'none', fontSize: '1rem' }} 
                  placeholder="Minimum 6 characters" 
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-full" style={{ padding: '0.8rem', fontSize: '1rem' }}>
              Save Password & Login
            </button>
          </form>
        )}

        {step === 'success' && (
          <div className="text-center py-6">
            <CheckCircle size={64} style={{ color: 'var(--color-accent)', margin: '0 auto 1rem auto' }} />
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Login Successful!</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Redirecting to your dashboard...</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;
