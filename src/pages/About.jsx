import React from 'react';
import './About.css';
import DirectorImage from '../assets/images/h.jpg';

const About = () => {
  return (
    <div className="about-page page-container">
      <div className="glass-container">
        <h1 className="gold-gradient">About <span>Vetri Realtors</span></h1>
        
        <div className="gold-border" style={{ margin: "2rem 0 3rem" }}></div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Vetri Realtors Pvt Ltd specializes in premium real estate services with a focus on 
              farm lands, residential plots, and properties in prime locations along ECR and OMR.
              With a commitment to excellence and integrity, we provide unparalleled service to 
              our clients in Chennai's most sought-after locations.
            </p>
            
            <h2>Our Services</h2>
            <ul className="services-list">
              <li>
                <i className="fas fa-check-circle gold-icon"></i> 
                Buying & Selling Farm Lands
              </li>
              <li>
                <i className="fas fa-check-circle gold-icon"></i> 
                Residential Plot Transactions
              </li>
              <li>
                <i className="fas fa-check-circle gold-icon"></i> 
                Legal Opinions & Documentation
              </li>
              <li>
                <i className="fas fa-check-circle gold-icon"></i> 
                Property Registration Process
              </li>
              <li>
                <i className="fas fa-check-circle gold-icon"></i> 
                ECR & OMR Property Specialists
              </li>
            </ul>
          </div>
          
          <div className="leadership">
            <div className="glass-card director-card">
              <div className="director-image">
                <img src={DirectorImage} alt="Udhaya Vendan R - Managing Director" />
                <div className="gold-frame"></div>
              </div>
              <h3>Udhaya Vendan R</h3>
              <p>Managing Director</p>
              <div className="director-contact">
                <a href="mailto:vetrirealtorspvtltd@gmail.com" className="contact-link">
                  <i className="fas fa-envelope"></i> Email
                </a>
                <a href="tel:+918438623133" className="contact-link">
                  <i className="fas fa-phone-alt"></i> Call
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="legal-details">
          <h3>Company Information</h3>
          <div className="legal-grid">
            <div className="legal-item">
              <span className="legal-label">CIN:</span>
              <span className="legal-value">U68200TN2025TC18545</span>
            </div>
            <div className="legal-item">
              <span className="legal-label">TAN:</span>
              <span className="legal-value">CHEV26094F</span>
            </div>
            <div className="legal-item">
              <span className="legal-label">PAN:</span>
              <span className="legal-value">AALCV261IC</span>
            </div>
            <div className="legal-item full-width">
              <span className="legal-label">Address:</span>
              <span className="legal-value">
                No.2. Thirum, East Coast Road, Kovalam, Chengalpattu District, PIN-603112
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;