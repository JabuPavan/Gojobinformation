import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Loader2 } from 'lucide-react';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ProfessionalPage = lazy(() => import('./pages/ProfessionalPage'));
const UserProfile = lazy(() => import('./pages/UserProfile'));

const GlobalLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg)' }}>
    <Loader2 size={48} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<GlobalLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/professional/:id" element={<ProfessionalPage />} />
            
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
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
