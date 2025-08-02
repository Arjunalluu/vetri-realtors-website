import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} glass-nav`}>
      <div className="navbar-container">
        <div className="logo">VETRI<span>REALTORS</span></div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link" onClick={closeMobileMenu}>Home</a>
          <a href="/listings" className="nav-link" onClick={closeMobileMenu}>Properties</a>
          <a href="/about" className="nav-link" onClick={closeMobileMenu}>About</a>
          <a href="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
        </div>
        
        <div className="nav-cta">
          <a href="tel:+918438623133" className="phone-button">
            <i className="fas fa-phone-alt"></i> 
            <span className="phone-text">+91 84386 23133</span>
          </a>
        </div>
        
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;