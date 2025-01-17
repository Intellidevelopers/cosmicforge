// src/routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import 'swiper/css';
import OnboardingPage from "./pages/OnboardingPage";
import SignupPage from "./pages/SignupPage";
import OTPVerification from "./pages/OtpVerificationPage";
import Registration from "./pages/Registration";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Onboarding" element={<OnboardingPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/OtpVerification" element={<OTPVerification />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
  </Router>
);

export default AppRoutes;
