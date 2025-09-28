import React, { useState, useEffect } from "react";
import Button from "../components/Button";

import img1 from "../assets/item-1.jpg";
import img2 from "../assets/item-2.jpg";
import img3 from "../assets/item-3.jpg";
import img4 from "../assets/item-4.jpg";
import img5 from "../assets/item-5.jpg";
import img6 from "../assets/item-6.jpg";
import img7 from "../assets/item-7.jpg";

const Products = () => {
  const productData = [
    { id: 1, image: img1, title: "Gel Nail Polish", price: "$95.00" },
    { id: 2, image: img2, title: "Classic Manicure", price: "$75.00" },
    { id: 3, image: img3, title: "Pedicure Spa", price: "$110.00" },
    { id: 4, image: img4, title: "Nail Extensions", price: "$130.00" },
    { id: 5, image: img5, title: "French Tips", price: "$85.00" },
    { id: 6, image: img6, title: "Glitter Nails", price: "$105.00" },
    { id: 7, image: img7, title: "Acrylic Nails", price: "$120.00" },
  ];

  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5); // default desktop

  // Adjust items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // tablet
      } else {
        setItemsPerView(5); // desktop
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = productData.length - itemsPerView;
  const slidePercent = 100 / itemsPerView; // width % of each item

  return (
    <section className="py-16 px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center sm:text-left">
          Popular Products
        </h3>
        <Button>View All</Button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * slidePercent}%)`,
          }}
        >
          {productData.map((product) => (
            <div
              key={product.id}
              className={`w-1/${itemsPerView} flex-shrink-0 px-2 flex flex-col`}
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 sm:h-56 lg:h-65 object-cover rounded-lg shadow-md"
              />

              {/* Title + Price row */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-600 font-semibold text-sm sm:text-lg lg:text-2xl">
                  {product.title}
                </span>
                <span className="text-gray-500 font-semibold text-sm sm:text-base lg:text-xl">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 sm:w-4 sm:h-4 mt-3 rounded-full ${
              index === i ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
