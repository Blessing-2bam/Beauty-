import React, { useState, useEffect, useRef } from "react";
import Hero1 from "../assets/Hero.png";
import Hero2 from "../assets/Heroimg2.png";
import Hero3 from "../assets/Heroimg3.png";

const Hero = () => {
  const slides = [Hero1, Hero2, Hero3];
  const [current, setCurrent] = useState(0);
  const parallaxRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY * 0.5; // adjust speed
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Parallax */}
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={index === current ? parallaxRef : null}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform", // smooth animation
          }}
        ></div>
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 bg-black/10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Our Beauty Studio
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Where elegance meets confidence
        </p>
        <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-md text-lg">
          Book Appointment
        </button>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
