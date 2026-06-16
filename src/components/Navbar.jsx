import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogIn, LogOut, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Home Services', path: '/services' },
    { name: 'Business Owners', path: '/business' },
    { name: 'Shopping', path: '/shopping' },
    { name: 'Investors', path: '/investors' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/logo_org.png" alt="Gojobinformation Logo" className="logo-img" />
        </Link>

        {/* Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="navbar-actions">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="btn-auth btn-register" style={{ display: 'flex', alignItems: 'center' }}>
                <User size={16} /> <span className="hide-on-mobile" style={{ marginLeft: '6px' }}>My Profile</span>
              </Link>
              <button className="btn-auth btn-login" onClick={handleLogout} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <LogOut size={16} /> <span className="hide-on-mobile" style={{ marginLeft: '6px' }}>Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="btn-auth btn-register">
                <User size={16} /> <span className="hide-on-mobile">Register</span>
              </Link>
              <Link to="/login" className="btn-auth btn-login">
                <LogIn size={16} /> <span className="hide-on-mobile">Login</span>
              </Link>
            </>
          )}
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
