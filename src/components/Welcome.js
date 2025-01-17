import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirect
import '../styles/Welcome.css'; // Import CSS for styles
import logo from '../assets/logo.png'; // Replace with the path to your logo image

const Welcome = () => {
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate(); // Hook for navigating to other pages

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false); // Hide loader after 3 seconds
    }, 3000); // 3-second timeout for loader

    const redirectTimer = setTimeout(() => {
      navigate('/onboarding'); // Redirect to Onboarding screen after 3 seconds
    }, 3000); // Same 3-second timeout for redirect

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]); // Dependency on navigate to avoid warnings

  return (
    <div className="welcome-container">
      <img src={logo} alt="Cosmicforge Logo" className="welcome-logo" />
      {showLoader && <div className="loader"></div>}
      <p className="welcome-text">Cosmicforge Healthnet Limited</p>
    </div>
  );
};

export default Welcome;
