import React from 'react';
import './Hero.css';
import LocationImage from '../assets/images/t.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="gold-gradient">Premium Real Estate Solutions</h1>
        <p className="hero-subtitle">Specializing in Farm Lands, Residential Plots & Prime ECR/OMR Properties</p>
        <div className="hero-buttons">
          <a href="/listings" className="cta-button">View Properties</a>
          <a href="/contact" className="cta-button secondary">Legal Consultation</a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="glass-container visual-box">
          <img 
            src={LocationImage} 
            alt="ECR and OMR Locations" 
            className="location-image"
          />
        </div>
      </div>
      
      {/* MOVED LOCATION TAGS HERE */}
      <div className="location-tags">
        <span className="location-tag">ECR</span>
        <span className="location-tag">OMR</span>
        <span className="location-tag">CHENGALPATTU</span>
      </div>
      
      <div className="gold-dots">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="gold-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }}></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;