import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/Registration.css";
import logo from "../assets/logo.png";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const password = watch("password", ""); // Watch the password field

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (!password) return 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    return strength; // Strength ranges from 0 to 5
  };

  useEffect(() => {
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
  }, [password]);

  const onSubmit = () => {
    // Implement registration logic here
  };

  return (
    <div className="registration-container">
      <div className="go-back">
        <span>&larr;</span> Go Back
      </div>
      <div className="registration-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Welcome!</h2>
        <p>Start your journey with us.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
          {/* Full Name */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <span className="error">{errors.fullName.message}</span>
            )}
          </div>
          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          {/* Password */}
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}

            {/* Password Strength Progress Bar */}
            
          </div>
          {/* Confirm Password */}
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword.message}</span>
            )}
          </div>
          <div className="password-strength-container">
              <progress
                value={passwordStrength}
                max="5"
                className="password-progress-bar"
                style={{
                  backgroundColor: "#e0e0e0", // Default background color
                  "--progress-color": getStrengthColor(passwordStrength), // Dynamic color based on strength
                }}
              ></progress>
              {/* Conditionally Display Password Strength Text */}
              {password && (
                <div className="password-validation-text">
                  {passwordStrength < 2 && (
                    <span style={{ color: "red" }}>Password is too weak</span>
                  )}
                  {passwordStrength >= 2 && passwordStrength < 4 && (
                    <span style={{ color: "orange" }}>Password strength is fair</span>
                  )}
                  {passwordStrength >= 4 && (
                    <span style={{ color: "green" }}>Password is strong</span>
                  )}
                </div>
              )}
            </div>
          {/* Terms */}
          <div className="checkbox-group">
            <input
              type="checkbox"
              {...register("acceptTerms", {
                required: "You must accept the terms",
              })}
            />
            <label>
              I accept the <a href="/privacy">Privacy Policy</a> and{" "}
              <a href="/terms">Terms of Service</a>
            </label>
          </div>
          {errors.acceptTerms && (
            <span className="error">{errors.acceptTerms.message}</span>
          )}
          <button
            type="submit"
            className={`submit-button ${!isValid ? "inactive" : ""}`}
            disabled={!isValid}
          >
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

const getStrengthColor = (strength) => {
  switch (strength) {
    case 1:
      return "red"; // Weak
    case 2:
      return "red"; // Fair
    case 3:
      return "orange"; // Good
    case 4:
      return "green"; // Strong
    case 5:
      return "green"; // Very Strong
    default:
      return "green"; // Default for empty or very weak passwords
  }
};

export default Registration;
