import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import './HomeComponents.css';

const OnlineShopping = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const products = [
    { name: 'Tuna fish', price: 'Rs:450', oldPrice: 'Rs:', category: 'Fashion & Clothing', img: 'https://via.placeholder.com/150', isSale: true },
    { name: 'T-shirts', price: 'Rs:499', oldPrice: 'Rs:', category: 'Fashion & Clothing', img: 'https://via.placeholder.com/150', isSale: true },
    { name: 'Sam f 16', price: 'Rs:198', oldPrice: 'Rs:', category: 'Fashion & Clothing', img: 'https://via.placeholder.com/150', isSale: true },
    { name: 'Sam f 34', price: 'Rs:98', oldPrice: 'Rs:', category: 'Fashion & Clothing', img: 'https://via.placeholder.com/150', isSale: true },
  ];

  return (
    <div className="container py-8 text-center" style={{ backgroundColor: '#f9fafc' }}>
      <h2 className="section-title">Online Grocery Shopping</h2>
      <p className="section-subtitle mb-8">Popular products Online Supermarket</p>

      <div className="category-cards-wrapper mb-8">
        <button className="carousel-arrow prev" onClick={() => scroll('left')}><ChevronLeft size={20}/></button>
        <div className="category-cards" ref={carouselRef} style={{ gap: '1rem' }}>
          {products.map((prod, idx) => (
            <div key={idx} className="product-card" style={{ minWidth: '220px' }}>
              {prod.isSale && <span className="product-sale-badge">SALE</span>}
              <img src={prod.img} alt={prod.name} className="product-img" />
              <h3 className="product-name">{prod.name}</h3>
              <p className="product-price">{prod.price} <span className="product-old-price">{prod.oldPrice}</span></p>
              <p className="product-category">🛒 {prod.category}</p>
              <p className="pro-rating" style={{ fontSize: '0.7rem' }}>⭐⭐⭐⭐⭐ (123)</p>
              <button className="btn btn-success mt-4" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', borderRadius: '4px' }}>
                <ShoppingCart size={14} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button className="carousel-arrow next"><ChevronRight size={20}/></button>
      </div>

      <div className="mb-4">
        <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 1.5rem', borderRadius: '20px' }}>
          Browse All Categories &rarr;
        </button>
      </div>
    </div>
  );
};

export default OnlineShopping;
