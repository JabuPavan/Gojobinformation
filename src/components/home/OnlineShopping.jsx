import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { products } from '../../data/mockData';
import './HomeComponents.css';

const OnlineShopping = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container py-8 text-center" style={{ borderTop: '1px solid var(--color-border)' }}>
      <h2 className="section-title">Online Grocery & Shopping</h2>
      <p className="section-subtitle mb-8">Popular products in our Online Supermarket</p>

      <div className="category-cards-wrapper mb-8">
        <button className="carousel-arrow prev" onClick={() => scroll('left')}><ChevronLeft size={20}/></button>
        <div className="category-cards" ref={carouselRef} style={{ gap: '1rem' }}>
          {products.map((prod) => (
            <div key={prod.id} className="product-card" style={{ minWidth: '220px' }}>
              {prod.isSale && <span className="product-sale-badge">SALE</span>}
              <img src={prod.img} alt={prod.name} className="product-img" />
              <h3 className="product-name">{prod.name}</h3>
              <p className="product-price">{prod.price} <span className="product-old-price">{prod.oldPrice}</span></p>
              <p className="product-category">🛒 {prod.category}</p>
              <p className="pro-rating" style={{ fontSize: '0.75rem' }}>⭐⭐⭐⭐⭐</p>
              <button className="btn btn-primary mt-4" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', borderRadius: '6px' }}>
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button className="carousel-arrow next" onClick={() => scroll('right')}><ChevronRight size={20}/></button>
      </div>

      <div className="mb-4 mt-8">
        <button className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.6rem 2rem', borderRadius: '30px' }}>
          Browse All Categories &rarr;
        </button>
      </div>
    </div>
  );
};

export default OnlineShopping;
