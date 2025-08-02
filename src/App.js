import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Contact from './pages/Contact';
import useBackground from './hooks/useBackground';
import './App.css';
import './assets/css/glassmorphism.css';
import './assets/css/animations.css';

function App() {
  // We'll move useBackground inside a component that has Router context
  const AppWithBackground = () => {
    useBackground();
    
    return (
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <Router>
      <AppWithBackground />
    </Router>
  );
}

export default App;