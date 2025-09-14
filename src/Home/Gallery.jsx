import React, { useState } from "react";
import img1 from "../assets/item-7.jpg";
import img2 from "../assets/post-4.jpg";
import img3 from "../assets/post-6.jpg";
import img4 from "../assets/item-4.jpg";
import img5 from "../assets/item-1.jpg";
import img6 from "../assets/post-5.jpg";
import Button from "../components/Button";

const Gallery = () => {
  const images = [
    { src: img1, className: "h-[350px] w-full" },
    { src: img2, className: "h-[550px] w-full" },
    { src: img3, className: "h-[550px] w-full" },
    { src: img4, className: "h-[350px] w-full" },
    { src: img5, className: "h-[350px] w-full" },
    { src: img6, className: "h-[550px] w-full" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handleNext = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="px-6 py-12 my-30">
      <h2 className="text-6xl text-center mb-12 text-black tracking-wide font-light">
        View Gallery
      </h2>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Image ${index + 1}`}
            className={`${img.className} object-cover mb-4 rounded-lg cursor-pointer hover:opacity-80 transition`}
            onClick={() => handleOpen(index)}
          />
        ))}
      </div>

      {/* Overlay Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
          >
            &times;
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-4xl"
          >
            &#10094;
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-4xl"
          >
            &#10095;
          </button>

          {/* Selected Image */}
          <img
            src={images[selectedIndex].src}
            alt="Selected"
            className="max-h-[80%] max-w-[90%] object-contain rounded-lg"
          />
        </div>

        

       )}

       <div className="flex justify-center items-center">
  <Button>View Gallery</Button>
</div>

    </section>
  );
};

export default Gallery;
