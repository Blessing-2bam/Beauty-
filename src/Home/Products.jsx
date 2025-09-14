import React, { useState } from "react";
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
  const maxIndex = productData.length - 5; // 7 - 5 = 2 (3 dots total)

  return (
    <section className="py-30 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-6xl  tracking-wide">
          Popular Products
        </h3>
        <Button>View All</Button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 20}%)` }}
        >
          {productData.map((product) => (
            <div
              key={product.id}
              className="w-1/5 flex-shrink-0 px-2 flex flex-col"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-65 mt-15 object-cover rounded-lg shadow-md"
              />

              {/* Title + Price row */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600 font-semi-bold text-2xl ">
                  {product.title}
                </span>
                <span className="text-gray-500 font-semibold text-xl">
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
            className={`w-5 h-5 mt-5 rounded-full ${
              index === i ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
