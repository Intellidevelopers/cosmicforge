import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Onboarding.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';

import image1 from '../assets/1.png'; 
import image2 from '../assets/2.png'; 
import image3 from '../assets/3.png'; 
import image4 from '../assets/4.png'; 

// Initialize Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Onboarding = () => {
    const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      image: image1,
      title: 'Your Virtual AI Assistant and',
      highlight: 'Diagnostic Partner.',
      description: 'Seamless virtual consultations, intelligent diagnosis at your fingertips',
    },
    {
      id: 2,
      image: image2,
      title: 'Track Your Health',
      highlight: 'Effortlessly.',
      description: 'Monitor your health metrics and progress over time with ease.',
    },
    {
      id: 3,
      image: image3,
      title: 'Get Instant Recommendations',
      highlight: 'Tailored for You.',
      description: 'Personalized advice for better health and wellness.',
    },
    {
      id: 4,
      image: image4,
      title: 'Stay Connected with Experts',
      highlight: 'Anytime, Anywhere.',
      description: 'Access top medical professionals for guidance anytime, anywhere.',
    },
  ];

  const handleSkip = () => {
    navigate('/signup'); // Navigate to the Signup page
  };

  const handleNext = (swiperInstance) => {
    const nextIndex = swiperInstance.activeIndex + 1;
    if (nextIndex < slides.length) {
      swiperInstance.slideTo(nextIndex); // Navigate to the next slide
    } else {
      navigate('/signup'); // If it's the last slide, navigate to Signup
    }
  };

  return (
    <div className="onboarding-container">
       <Swiper
  pagination={{ clickable: true }}
  navigation
  className="mySwiper"
>
  {slides.map((slide) => (
    <SwiperSlide key={slide.id}>
      <div
        className="onboarding-slide"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="onboarding-content">
          <h1>
            {slide.title}{' '}
            <span className="highlighted-text">{slide.highlight}</span>
          </h1>
          <p>{slide.description}</p>
          <div className="onboarding-actions">
            <button className="skip-button" onClick={handleSkip}>Skip</button>
            <button className="next-button">Next</button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </div>
  );
};

export default Onboarding;
