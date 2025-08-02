import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      {/* Other sections will go here */}
      <section className="placeholder-section">
        <h2>Premium Properties Section</h2>
        <p>Featured listings will appear here</p>
      </section>
    </div>
  );
};

export default Home;