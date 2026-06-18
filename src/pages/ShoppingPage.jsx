import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import './Pages.css';

const ShoppingPage = () => {
  const products = [
    { id: 1, name: 'Premium Wireless Headphones', price: '$299.99', rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', badge: 'New' },
    { id: 2, name: 'Smart Fitness Watch', price: '$199.50', rating: 4.6, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', badge: 'Sale' },
    { id: 3, name: 'Minimalist Leather Bag', price: '$145.00', rating: 4.9, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', badge: null },
    { id: 4, name: 'Ergonomic Desk Chair', price: '$349.00', rating: 4.7, image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', badge: 'Popular' },
    { id: 5, name: 'Mechanical Keyboard', price: '$129.99', rating: 4.8, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', badge: null },
    { id: 6, name: 'Portable Bluetooth Speaker', price: '$89.00', rating: 4.5, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', badge: 'Sale' },
  ];

  return (
    <div className="page-container animate-fade-in">
      <div style={{ backgroundColor: 'var(--color-primary)', color: '#000', padding: '1rem', textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
        FREE SHIPPING ON ORDERS OVER $50
      </div>

      <div className="container py-8" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>Trending Products</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <select className="search-input" style={{ width: 'auto' }}>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        <div className="grid-cards">
          {products.map(product => (
            <div key={product.id} className="card-item" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                {product.badge && (
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: product.badge === 'Sale' ? '#ef4444' : 'var(--color-primary)', color: product.badge === 'Sale' ? 'white' : 'black', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 'bold', zIndex: 10 }}>
                    {product.badge}
                  </div>
                )}
                <button style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', zIndex: 10, color: 'var(--color-text-main)' }}>
                  <Heart size={18} />
                </button>
                
                <div style={{ height: '280px', overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', opacity: 0.9 }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-text-main)', lineHeight: 1.4, flex: 1 }}>{product.name}</h3>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', color: 'var(--color-accent)', marginRight: '0.5rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>({product.rating})</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>{product.price}</span>
                  <button className="btn btn-primary" style={{ padding: '0.5rem', minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
