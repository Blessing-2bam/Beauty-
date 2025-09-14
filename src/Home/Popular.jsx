import React, { useState } from 'react';
import Button from '../components/Button';
import About_img from '../assets/about-img.jpg';
import About_video from '../assets/about-video.mp4';

const Popular = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 bg-white flex flex-col md:flex-row items-center md:justify-between mt-32">
      {/* TEXT SECTION */}
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-6xl mb-4 leading-snug tracking-wide">
          Most Popular, Clean, And Recommended Nail Salon
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl">
          Pretium turpis faucibus adipiscing duis. Id quis tristique mi vitae nec. In et in praesent pellentesque. Porta sit porta ridiculus faucibus. Curabitur lacus pretium pellentesque interdum urna blandit.
        </p>
        <ul className="text-gray-600 list-disc list-inside mb-6">
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>Fugiat aliquid qui quia provident unde cumque excepturi enim.</li>
          <li>Saepe ipsum quam sed corporis aut voluptate quaerat quo quisquam.</li>
        </ul>
        <div className="mt-4 flex justify-center md:justify-start">
          <Button>About Us</Button>
        </div>
      </div>

      {/* IMAGE / VIDEO TRIGGER */}
      <div className="mt-8 md:mt-0 relative">
        <img
          src={About_img}
          alt="Nail Salon"
          className="w-full max-w-7xl h-auto object-cover cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        {/* PLAY ICON OVERLAY */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          ▶
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl mx-4">
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            {/* VIDEO */}
            <video
              src={About_video}
              controls
              autoPlay
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Popular;
