import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import '../home/HomeComponents.css'; // Inherit styling

// Wrapped in React.memo to prevent unnecessary re-renders when parent state changes
const ProCard = React.memo(({ professional }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="pro-card" 
      onClick={() => navigate(`/professional/${professional.id}`)} 
      style={{ cursor: 'pointer', width: '100%', maxWidth: '320px', margin: '0 auto' }}
    >
      <div className="pro-avatar">
        <img src={professional.avatar} alt={professional.name} />
      </div>
      <h3 className="pro-name">{professional.name}</h3>
      <p className="pro-title">{professional.title}</p>
      <p className="pro-rating" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem' }}>
        <Star size={14} className="text-accent" style={{ fill: 'currentColor' }} /> 
        <span style={{ color: 'var(--color-text-main)' }}>{professional.rating}</span>
      </p>
      {professional.isGold && <span className="pro-badge" style={{ marginTop: '0.5rem' }}>Verified Expert</span>}
      <button 
        className="btn btn-primary" 
        style={{ width: '100%', fontSize: '0.85rem', padding: '0.6rem', marginTop: '1rem' }}
        onClick={(e) => {
          e.stopPropagation(); // prevent triggering parent onClick twice
          navigate(`/professional/${professional.id}`);
        }}
      >
        View Profile & Book
      </button>
    </div>
  );
});

export default ProCard;
