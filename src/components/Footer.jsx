import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">VETRI<span>REALTORS</span></div>
          <p>Premium Real Estate Solutions in ECR & OMR</p>
        </div>
        
            <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> No.2. Thirum, ECR, Kovalam</p>
            <p><i className="fas fa-phone-alt"></i> +91 84386 23133</p>
            <p>
                <i className="fas fa-envelope"></i> 
                <a href="mailto:vetrirealtorspvtltd@gmail.com" className="email-link">
                vetrirealtorspvtltd@gmail.com
                </a>
            </p>
            </div>
        
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>Farm Land Transactions</li>
            <li>Residential Plots</li>
            <li>Legal Documentation</li>
            <li>Property Registration</li>
            <li>ECR/OMR Properties</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-legal">
        <p>CIN: U68200TN2025TC18545 | TAN: CHEV26094F | PAN: AALCV261IC</p>
        <p className="copyright">&copy; 2025 Vetri Realtors Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;