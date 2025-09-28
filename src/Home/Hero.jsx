import React, { useState, useEffect, useRef } from "react";
import Hero1 from "../assets/Hero.png";
import Hero2 from "../assets/Heroimg2.png";
import Hero3 from "../assets/Heroimg3.png";

// Optional WebP for faster load
import Hero1Webp from "../assets/Hero.webp";
import Hero2Webp from "../assets/Heroimg2.webp";
import Hero3Webp from "../assets/Heroimg3.webp";

const Hero = () => {
  const slides = [
    { desktop: Hero1, webp: Hero1Webp || Hero1 },
    { desktop: Hero2, webp: Hero2Webp || Hero2 },
    { desktop: Hero3, webp: Hero3Webp || Hero3 },
  ];

  const [current, setCurrent] = useState(0);
  const parallaxRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Parallax effect on desktop only
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && window.innerWidth >= 768) {
        const offset = window.scrollY * 0.5;
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <picture
          key={index}
          ref={index === current ? parallaxRef : null}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* WebP for faster browsers */}
          <source srcSet={slide.webp} type="image/webp" />
          {/* Fallback Desktop PNG */}
          <img
            src={slide.desktop}
            alt={`Hero Slide ${index + 1}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 bg-black/10 px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug">
          Welcome to Our Beauty Studio
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Where elegance meets confidence
        </p>
        <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-md text-base md:text-lg transition-colors">
          Book Appointment
        </button>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
