import React from 'react';
import './Hero.css';
import LocationImage from '../assets/images/t.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content fade-in">
        <h1>Premium Real Estate Solutions</h1>
        <p>Specializing in Farm Lands, Residential Plots & Prime ECR/OMR Properties</p>
        <div className="hero-buttons">
          <a href="/listings" className="cta-button">View Properties</a>
          <a href="/contact" className="cta-button secondary">Legal Consultation</a>
        </div>
      </div>
      <div className="hero-visual float-element">
        <div className="glass-container visual-box">
          <img 
            src={LocationImage} 
            alt="ECR and OMR Locations" 
            className="location-image"
          />
          <div className="location-overlay">
            <span>ECR</span>
            <span>OMR</span>
            <span>CHENGALPATTU</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;