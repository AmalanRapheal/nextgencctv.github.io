import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const slides = [
  {
    image: 'https://picsum.photos/seed/security-wide/1920/1080',
    title: 'Your Trusted Partner in Security',
    subtitle: 'Providing state-of-the-art CCTV and security solutions for homes and businesses. Peace of mind, guaranteed.',
  },
  {
    image: 'https://picsum.photos/seed/business-cam/1920/1080',
    title: 'Protect Your Business Assets',
    subtitle: 'Comprehensive surveillance systems designed to deter threats and monitor your commercial property 24/7.',
  },
  {
    image: 'https://picsum.photos/seed/home-security/1920/1080',
    title: 'Secure Your Home & Family',
    subtitle: 'Keep an eye on what matters most with our reliable and easy-to-use residential security camera solutions.',
  },
  {
    image: 'https://picsum.photos/seed/night-vision/1920/1080',
    title: 'Advanced Night Vision Technology',
    subtitle: 'Capture crystal-clear footage even in complete darkness. Never miss a detail, day or night.',
  },
   {
    image: 'https://picsum.photos/seed/mobile-access/1920/1080',
    title: 'Monitor From Anywhere',
    subtitle: 'Access live video feeds and recordings from your smartphone, tablet, or computer with our intuitive mobile app.',
  },
];


const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen text-white overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div key={currentIndex} className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                {slides[currentIndex].title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
                {slides[currentIndex].subtitle}
            </p>
        </div>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
        >
          Request a Free Consultation
        </a>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors" aria-label="Previous slide">
        <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors" aria-label="Next slide">
        <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-blue-500 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;