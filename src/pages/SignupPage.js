import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import '../styles/Signup.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


// Import flag assets
import nigeriaFlag from '../assets/nigeria.png';
import caFlag from '../assets/canada.png';
import usaFlag from '../assets/usa.png';

// Import social icon images from assets
import facebookIcon from '../assets/facebook.png';
import googleIcon from '../assets/google.png';
import appleIcon from '../assets/apple.png';

const SignupPage = () => {
    const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [selectedCountry, setSelectedCountry] = useState({
    value: 'nigeria',
    label: 'Nigeria',
    flag: nigeriaFlag,
  });
  const [mobileNumber, setMobileNumber] = useState('');

  const countryOptions = [
    { value: 'nigeria', label: 'Nigeria', flag: nigeriaFlag },
    { value: 'ca', label: 'Canada', flag: caFlag },
    { value: 'usa', label: 'USA', flag: usaFlag },
  ];

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption); // Update the selected value
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value); // Update mobile number state
  };

  const onSubmit = (data) => {
    console.log({ ...data, country: selectedCountry.value }); // Include selected country in submitted data
  };

  const handleSignup = () => {
    navigate('/OtpVerification')
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      padding: '5px',
      borderRadius: '10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      backgroundColor: isSelected ? '#e8f4ff' : isFocused ? '#f5faff' : '#fff',
      color: '#333',
      cursor: 'pointer',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
    }),
  };

  return (
    <div className="signup-container">
      <div className="go-back">
        <AiOutlineArrowLeft />
        <span>Go Back</span>
      </div>
      <div className="signup-content">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <h2>Sign Up</h2>
        <p>Let's get you started.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="form-group">
            <Select
              options={countryOptions}
              placeholder="Select Country"
              className="country-select"
              value={selectedCountry}
              onChange={handleCountryChange}
              styles={customStyles}
              getOptionLabel={(e) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={e.flag}
                    alt={e.label}
                    style={{
                      width: '20px',
                      height: '15px',
                      marginRight: '5px',
                      borderRadius: '2px',
                      objectFit: 'cover',
                    }}
                  />
                  <span>{e.label}</span>
                </div>
              )}
              getOptionValue={(e) => e.value}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              {...register('mobileNumber', { required: true })}
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="input-field"
            />
          </div>
          <button
            type="submit"
            className={`signup-button ${mobileNumber ? 'enabled' : 'disabled'}`} // Add class based on mobile number
            disabled={!mobileNumber} // Button is disabled if mobile number is empty
            onClick={handleSignup}
            style={{
                pointerEvents: mobileNumber ? 'auto' : 'none',
            }}
            >
            Sign Up
          </button>

        </form>
        <div className="divider">
            <span className='span1'></span>
            <span className='orText'>or</span>
            <span className='span2'></span>
        </div>
        <div className="social-icons">
          <img className='social-icon' src={facebookIcon} alt="Nigeria Flag" />
          <img className='social-icon' src={googleIcon} alt="Nigeria Flag" />
          <img className='social-icon' src={appleIcon} alt="Nigeria Flag" />
        </div>
        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
