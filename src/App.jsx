import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Added Navbar Routes */}
            <Route path="/jobs" element={<PlaceholderPage />} />
            <Route path="/services" element={<PlaceholderPage />} />
            <Route path="/business" element={<PlaceholderPage />} />
            <Route path="/shopping" element={<PlaceholderPage />} />
            <Route path="/investors" element={<PlaceholderPage />} />
            <Route path="/blog" element={<PlaceholderPage />} />
            <Route path="/contact" element={<PlaceholderPage />} />

            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
