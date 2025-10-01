import React from "react";
import background_img3 from "../assets/background-3.jpg";
import background_img3_webp from "../assets/background-3.webp";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with WebP + fallback */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={background_img3_webp} type="image/webp" />
        <img
          src={background_img3}
          alt="Shop Background"
          className="w-full h-full object-cover"
          loading="eager" // ensures fast load
        />
      </picture>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 tracking-wide font-light bg-black/10">
        <h1 className="text-5xl md:text-8xl font-bold mb-4">Services</h1>
        <p className="text-xl md:text-2xl mb-6">Home / Pages / Services</p>
      </div>
    </section>
  );
};

export default Hero;