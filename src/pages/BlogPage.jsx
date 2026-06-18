import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Pages.css';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: '10 Tips for Landing Your Dream Job in Tech',
      excerpt: 'Discover the most effective strategies for standing out in today\'s competitive tech job market, from resume optimization to interview prep.',
      category: 'Career',
      author: 'Jane Doe',
      date: 'Oct 15, 2023',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'How to Scale Your Local Service Business',
      excerpt: 'Learn how to leverage digital platforms to find more clients, optimize your scheduling, and grow your local service company.',
      category: 'Business',
      author: 'John Smith',
      date: 'Oct 12, 2023',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'The Future of E-commerce in 2024',
      excerpt: 'We analyze upcoming trends in online shopping, including AR try-ons, sustainable packaging, and hyper-personalized experiences.',
      category: 'E-commerce',
      author: 'Sarah Johnson',
      date: 'Oct 08, 2023',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Understanding Tech Startup Valuations',
      excerpt: 'A comprehensive guide for investors looking to understand how tech startups are valued in the current macroeconomic climate.',
      category: 'Investing',
      author: 'Michael Chen',
      date: 'Oct 05, 2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Remote Work: Best Practices for Managers',
      excerpt: 'Managing a distributed team comes with unique challenges. Here are our top tips for maintaining productivity and culture.',
      category: 'Leadership',
      author: 'Emily White',
      date: 'Sep 28, 2023',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Essential Tools for Independent Contractors',
      excerpt: 'The software stack every freelancer and independent contractor needs to run their business efficiently.',
      category: 'Freelancing',
      author: 'David Brown',
      date: 'Sep 22, 2023',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Our Blog</h1>
        <p className="page-subtitle">Insights, news, and tips for job seekers, businesses, and investors.</p>
        
        <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {['All', 'Career', 'Business', 'E-commerce', 'Investing', 'Freelancing'].map((tag, i) => (
            <button key={i} className={i === 0 ? "btn btn-primary" : "btn btn-outline"} style={{ borderRadius: '999px' }}>{tag}</button>
          ))}
        </div>
      </div>

      <div className="container py-12" style={{ marginTop: '2rem' }}>
        <div className="grid-cards">
          {posts.map(post => (
            <div key={post.id} className="card-item" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: 'rgba(133, 152, 200, 0.1)', color: 'var(--color-primary)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{post.category}</span>
                  <div className="text-muted" style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                    <Calendar size={14} style={{ marginRight: '0.25rem' }} /> {post.date}
                  </div>
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.75rem', lineHeight: 1.4 }}>{post.title}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <div className="text-muted" style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                    <User size={16} style={{ marginRight: '0.5rem' }} /> {post.author}
                  </div>
                  <span style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>
                    Read More <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <button className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>Load More Posts</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
