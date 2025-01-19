import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Onboarding.css';

import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigate('/signup');
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleSkip = () => {
        navigate('/signup');
    };

    return (
        <div className="onboarding-container">
            <div className="slides-container">
                <div
                    className="slides-wrapper"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: 'transform 0.5s ease-in-out',
                        display: 'flex',
                    }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="slide"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                minWidth: '100%',
                                height: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="onboarding-content">
                                <h1>
                                    {slide.title}{' '}
                                    <span className="highlighted-text">{slide.highlight}</span>
                                </h1>
                                <p className='desc'>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="onboarding-actions">
                <button className="prev-button" onClick={handlePrev} disabled={currentIndex === 0}>
                    Previous
                </button>
                <button
                    className="next-button"
                    onClick={handleNext}
                >
                    {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
                </button>
                <button className="skip-button" onClick={handleSkip}>
                    Skip
                </button>
            </div>
            <div className="pagination-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Onboarding;
