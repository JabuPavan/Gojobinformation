import React from 'react';
import { User, MapPin } from 'lucide-react';
import { jobs } from '../../data/mockData';
import './HomeComponents.css';

const JobListings = () => {
  return (
    <div className="container mb-8 mt-8">
      <div className="job-listings-grid">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-card-info">
              <div className="job-avatar">
                <User size={24} />
              </div>
              <div>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company}</p>
                <p className="job-salary">{job.salary}</p>
                <p className="job-location"><MapPin size={12} className="mr-2" style={{display: 'inline'}} /> {job.location}</p>
              </div>
            </div>
            <div className="job-card-actions">
              <span className="badge badge-purple">{job.type}</span>
              <button className="btn btn-success">Apply now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>Load more listings &rarr;</button>
      </div>
    </div>
  );
};

export default JobListings;
