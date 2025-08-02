import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useBackground = () => {
  const location = useLocation();
  
  useEffect(() => {
    let backgroundClass = '';
    
    switch(location.pathname) {
      case '/':
        backgroundClass = 'home-bg';
        break;
      case '/about':
        backgroundClass = 'about-bg';
        break;
      case '/listings':
        backgroundClass = 'listings-bg';
        break;
      case '/contact':
        backgroundClass = 'contact-bg';
        break;
      default:
        backgroundClass = 'home-bg';
    }
    
    document.body.className = backgroundClass;
    
    return () => {
      document.body.className = '';
    };
  }, [location]);
};

export default useBackground;