import React, { useState, useEffect } from 'react';
import '../Styles/index.css';

const FadeInDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts
    setIsVisible(true);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className={`fade-container ${isVisible ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInDiv;
