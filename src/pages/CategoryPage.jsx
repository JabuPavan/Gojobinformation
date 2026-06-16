import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Search, Loader2 } from 'lucide-react';
import { professionalCategories, professionals } from '../data/mockData';
import '../components/home/HomeComponents.css'; 
import ProCard from '../components/common/ProCard';

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const categoryId = parseInt(id, 10);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [categoryId]);

  const category = useMemo(() => professionalCategories.find(c => c.id === categoryId), [categoryId]);
  const filteredProfessionals = useMemo(() => professionals.filter(pro => pro.categoryId === categoryId), [categoryId]);

  if (!category) {
    return (
      <div className="container py-8 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Category Not Found</h2>
        <button className="btn btn-outline mt-4" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={48} className="text-primary mx-auto" style={{ animation: 'spin 1s linear infinite' }} />
        <p className="mt-4 text-muted">Loading professionals...</p>
        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div className="category-page" style={{ paddingBottom: '4rem', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Mobile-Friendly Header */}
      <div style={{ backgroundColor: 'var(--color-surface)', padding: '1rem', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: '0', zIndex: 10, display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => navigate('/')} style={{ color: 'var(--color-text-main)' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', margin: 0 }}>
          {category.icon} {category.name} Professionals
        </h2>
      </div>

      <div className="container py-8">
        {filteredProfessionals.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem', justifyItems: 'center' }}>
            {filteredProfessionals.map((pro) => (
              <ProCard key={pro.id} professional={pro} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8" style={{ width: '100%' }}>
            <Search size={48} className="mx-auto text-muted mb-4 opacity-50" />
            <h3 className="text-muted">No professionals available</h3>
            <p className="text-sm text-muted">Be the first to list your services in this category!</p>
            <button className="btn btn-primary mt-4" style={{ borderRadius: '20px', padding: '0.6rem 2rem' }}>
              Register As A Professional
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
