import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/item-1.jpg";
import img2 from "../assets/item-2.jpg";
import img3 from "../assets/item-3.jpg";
import img4 from "../assets/item-4.jpg";

const Product = () => {
  const images = [img1, img2, img3, img4];
  const [stack, setStack] = useState(images);
  const [paused, setPaused] = useState(false);
  const [sliding, setSliding] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Pink");
  const [quantity, setQuantity] = useState(1); 
  const intervalRef = useRef(null);

  // Auto slide
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        slideUp();
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, stack]);

  const slideUp = () => {
    setSliding(true);
    setTimeout(() => {
      setStack((prev) => {
        const newStack = [...prev];
        const first = newStack.shift();
        newStack.push(first);
        return newStack;
      });
      setSliding(false);
    }, 700);
  };

  const handleClick = (clickedImg) => {
    setPaused(true);
    setStack((prev) => {
      const idx = prev.indexOf(clickedImg);
      return [...prev.slice(idx), ...prev.slice(0, idx)];
    });
    setTimeout(() => setPaused(false), 2000);
  };

  // Quantity controls
  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <section className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 py-40">
      {/* Left: Vertical Slider */}
      <div className="flex w-full md:w-2/4 h-[500px] overflow-hidden">
        <div className="w-1/4 flex items-center justify-center overflow-hidden relative">
          <div
            className={`flex flex-col ${
              sliding ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: sliding ? "translateY(-25%)" : "translateY(0%)",
            }}
          >
            {stack.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => handleClick(img)}
                className="w-34 h-34 object-cover rounded-lg cursor-pointer m-2 shadow-lg"
              />
            ))}
          </div>
        </div>

        {/* Full Preview */}
        <div className="w-3/4 flex items-center justify-center">
          <img
            src={stack[0]}
            alt="main-preview"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-700"
          />
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="w-full md:w-2/4">
        <h2 className="text-4xl font-bold mb-2">Gel Nail Polish</h2>

        {/* ⭐ Star Rating */}
        <div className="flex items-center mb-3">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          <span className="ml-2 text-gray-600 text-lg">5.0</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-700">
          $170.00{" "}
          <sub className="text-gray-400 line-through ml-2">$240.00</sub>
        </h1>

        <p className="mt-4 text-gray-700 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sed
          numquam et fugit optio aperiam ut, voluptas error culpa aut quidem
          unde, ducimus consequuntur tempora itaque a, nostrum excepturi
          eligendi.
        </p>

        {/* Color Selection */}
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">Color:</h3>
          <div className="flex gap-3">
            {["Pink", "Red", "Blue", "Nude"].map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                  selectedColor === color
                    ? " scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              ></div>
            ))}
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Selected: <span className="font-semibold">{selectedColor}</span>
          </p>
        </div>

        <p className="mt-4 text-green-600 font-semibold">2 in stock</p>

        {/* Quantity + Add to Cart */}
        <div className="mt-3 flex items-center gap-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={decreaseQty}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
            >
              –
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>

          <button className="bg-pink-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-700 transition">
            Add to Cart
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600">SKU: 1223</p>
        <p className="text-sm text-gray-600">Category: Skin Care, Cleanser</p>
        <p className="text-sm text-gray-600">Tags: Skin, Acne</p>
      </div>
    </section>
  );
};

export default Product;
