import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} glass-nav`}>
      <div className="logo">VETRI<span>REALTORS</span></div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/listings">Properties</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="nav-cta">
        <a href="tel:+918438623133" className="phone-button">
          <i className="fas fa-phone-alt"></i> +91 84386 23133
        </a>
      </div>
    </nav>
  );
};

export default Navbar;