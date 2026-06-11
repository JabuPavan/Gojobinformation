import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo-icon-large">G</div>
          <h2>Create an Account</h2>
          <p>Join Gojobinformation and start hiring or working</p>
        </div>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="input-group">
              <label className="input-label">First Name</label>
              <input type="text" className="input-field" placeholder="John" />
            </div>
            <div className="input-group">
              <label className="input-label">Last Name</label>
              <input type="text" className="input-field" placeholder="Doe" />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Account Type</label>
            <select className="input-field select-field">
              <option value="jobseeker">Job Seeker</option>
              <option value="employer">Employer / Business Owner</option>
            </select>
          </div>
          
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input type="email" className="input-field" placeholder="you@example.com" />
          </div>
          
          <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" className="input-field" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="btn btn-primary btn-full mt-4 auth-btn">
            <UserPlus size={18} className="mr-2" /> Create Account
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login" className="text-primary font-medium hover-underline">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
