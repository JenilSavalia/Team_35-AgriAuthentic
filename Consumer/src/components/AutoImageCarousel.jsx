import React, { useState, useEffect, useRef } from 'react';
import soilmoist from '../assets/SoilMoist.jpg'
import waterTDS from '../assets/waterTDS.jpg'
import PH from '../assets/PH.jpg'
import soiltemp from '../assets/soiltemp.jpg'

const AutoImageCarousel = () => {
  const images = [
    {
      id: 1,
      src: soilmoist,
      // alt: "Organic farm with crops",
      caption: "Soil Moisture"
    },
    {
      id: 2,
      src: waterTDS,
      // alt: "Blockchain technology visualization",
      caption: "Water TDS"
    },
    {
      id: 3,
      src: PH,
      // alt: "Farmer scanning product with mobile app",
      caption: "Soil PH"
    },
    {
      id: 4,
      src: soiltemp,
      // alt: "Consumer checking product authenticity",
      caption: "Soil Temperature"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef();
  const transitionTimeoutRef = useRef();

  const transitionToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      transitionTimeoutRef.current = setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    transitionToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    transitionToSlide(newIndex);
  };

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      transitionToSlide(index);
    }
  };

  // Set up automatic rotation
  useEffect(() => {
    autoPlayRef.current = () => {
      nextSlide();
    };
  }, [currentIndex]);

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 3000);

    return () => {
      clearInterval(interval);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-xl max-w-md mx-auto h-96">
      {/* Main carousel container */}
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out
              ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-lg md:text-xl font-semibold">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-800 p-2 rounded-full transition-all duration-300 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-800 p-2 rounded-full transition-all duration-300 focus:outline-none"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button> */}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
              ${index === currentIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AutoImageCarousel;