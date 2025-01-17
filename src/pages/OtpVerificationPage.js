import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/OtpVerification.css";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';


const OTPVerification = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues, setValue } = useForm();
  const inputRefs = useRef([]);
  const [isComplete, setIsComplete] = useState(false); // Tracks OTP completeness

  const onSubmit = (data) => {
    const otpCode = Object.values(data).join(""); // Concatenate OTP values
    console.log("OTP Code Entered:", otpCode);
  };

  const handleKeyUp = (event, index) => {
    const currentValues = getValues(); // Get all OTP values

    // Check if all inputs are filled
    const complete = Object.values(currentValues).every((val) => val?.trim().length === 1);
    setIsComplete(complete); // Update the state to enable/disable the button

    // Navigate focus
    if (event.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.target.value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleChange = (value, index) => {
    setValue(`digit${index + 1}`, value); // Update value in `react-hook-form`
    const currentValues = getValues();

    // Check if all inputs are filled
    const complete = Object.values(currentValues).every((val) => val?.trim().length === 1);
    setIsComplete(complete);
  };

  const handleRegister = () => {
    // Implement registration logic here
    navigate('/Registration');
  };

  return (
    <div className="otp-container">
      <div className="go-back">
        <span>&larr;</span> Go Back
      </div>
      <div className="otp-content">
        <img
          src={logo} // Replace with your logo URL
          alt="Logo"
          className="logo"
        />
        <h2>OTP Code</h2>
        <p>
          We sent you a 6-digit code via your number <b style={{ color: "#000" }}>+234 1234 5676</b>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="otp-form">
          <div className="otp-inputs">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                {...register(`digit${index + 1}`, { required: true })}
                ref={(el) => (inputRefs.current[index] = el)}
                onKeyUp={(e) => handleKeyUp(e, index)}
                onChange={(e) => handleChange(e.target.value, index)}
                className="otp-box"
              />
            ))}
          </div>
          <div className="resend-code">Resend Code</div>
          <button
            type="submit"
            className={`continue-button ${isComplete ? "enabled" : "disabled"}`}
            disabled={!isComplete} // Disable button if OTP is incomplete
            onClick={handleRegister}
          >
            Continue
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
