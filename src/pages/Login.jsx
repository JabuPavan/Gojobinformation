import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo-icon-large">G</div>
          <h2>Welcome Back</h2>
          <p>Login to your Gojobinformation account</p>
        </div>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input type="email" className="input-field" placeholder="you@example.com" />
          </div>
          
          <div className="input-group">
            <div className="flex justify-between items-center">
              <label className="input-label">Password</label>
              <a href="#" className="text-sm text-primary hover-underline">Forgot password?</a>
            </div>
            <input type="password" className="input-field" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="btn btn-primary btn-full mt-4 auth-btn">
            <LogIn size={18} className="mr-2" /> Sign In
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register" className="text-primary font-medium hover-underline">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
