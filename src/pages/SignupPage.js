import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import '../styles/Signup.css';
import logo from '../assets/logo.png';
import facebookIcon from '../assets/facebook.png';
import googleIcon from '../assets/google.png';
import appleIcon from '../assets/apple.png';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate(); // UseNavigate hook for navigation
  const { register, handleSubmit } = useForm();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonDisabled(!/\S+@\S+\.\S+/.test(e.target.value)); // Disable button unless email is valid
  };

  const onSubmit = (data) => {
    navigate('/OtpVerification')
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none', 
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
  };

  return (
    <div className="signup-container">
      <div className="go-back">
        <AiOutlineArrowLeft />
        <span>Go Back</span>
      </div>
      <div className="signup-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Sign Up</h2>
        <p>Let's get you started.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="form-group">
           
            <input
              type="email"
              placeholder="Email Address"
              {...register('email', { required: true })}
              value={email}
              onChange={handleEmailChange}
              className="input-field"
            />
          </div>
          <button
            type="submit"
            className={`signup-button ${!isButtonDisabled ? 'enabled' : 'disabled'}`}
            disabled={isButtonDisabled}
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </form>
        <div className="divider">
          <span className="span1"></span>
          <span className="orText">or</span>
          <span className="span2"></span>
        </div>
        <div className="social-icons">
          <img className="social-icon" src={facebookIcon} alt="Facebook" />
          <img className="social-icon" src={googleIcon} alt="Google" />
          <img className="social-icon" src={appleIcon} alt="Apple" />
        </div>
        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
