// src/pages/About.jsx
import React from 'react';
import './About.css';
import DirectorImage from '../assets/images/h.jpg'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="glass-container about-card">
        <h1>About <span>Vetri Realtors</span></h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Vetri Realtors Pvt Ltd specializes in premium real estate services with a focus on 
              farm lands, residential plots, and properties in prime locations along ECR and OMR.
            </p>
            
            <h2>Our Services</h2>
            <ul className="services-list">
              <li><i className="fas fa-check-circle"></i> Buying & Selling Farm Lands</li>
              <li><i className="fas fa-check-circle"></i> Residential Plot Transactions</li>
              <li><i className="fas fa-check-circle"></i> Legal Opinions & Documentation</li>
              <li><i className="fas fa-check-circle"></i> Property Registration Process</li>
              <li><i className="fas fa-check-circle"></i> ECR & OMR Property Specialists</li>
            </ul>
          </div>
          
          <div className="leadership">
            <div className="director-card glass-card">
              <div className="director-image">
                <img src={DirectorImage} alt="Udhaya Vendan R - Managing Director" />
              </div>
              <h3>Udhaya Vendan R</h3>
              <p>Managing Director</p>
              <div className="director-contact">
                <a href="mailto:vetrirealtorspvtltd@gmail.com">
                  <i className="fas fa-envelope"></i> Email
                </a>
                <a href="tel:+918438623133">
                  <i className="fas fa-phone-alt"></i> Call
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="legal-details">
          <h3>Company Information</h3>
          <p><strong>CIN:</strong> U68200TN2025TC18545</p>
          <p><strong>TAN:</strong> CHEV26094F</p>
          <p><strong>PAN:</strong> AALCV261IC</p>
          <p><strong>Address:</strong> No.2. Thirum, East Coast Road, Kovalam, Chengalpattu District, PIN-603112</p>
        </div>
      </div>
    </div>
  );
};

export default About;