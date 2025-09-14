import React, { useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react"; // icons

import img1 from "../assets/item-1.jpg";
import img2 from "../assets/item-2.jpg";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Luxury Nail Polish", details: "Rose Pink, 50ml", price: 25, qty: 2, img: img1 },
    { id: 2, name: "Hand Cream", details: "Lavender, 100ml", price: 15, qty: 1, img: img2 },
  
    { id: 3, name: "Luxury Nail Polish", details: "Rose Pink, 50ml", price: 25, qty: 2, img: img1 },
    { id: 4, name: "Hand Cream", details: "Lavender, 100ml", price: 15, qty: 1, img: img2 },
     ]);

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "plus" ? item.qty + 1 : item.qty > 1 ? item.qty - 1 : 1,
            }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="py-40 px-6 bg-gray-50">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SIDE - Cart Items */}
        <div className="md:col-span-2  p-6">
          {/* Table Headings */}
          <div className="grid grid-cols-3 font-bold text-gray-700 border-b border-gray-400 pb-2 mb-4 text-3xl">
            <span>Product</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Price</span>
          </div>

          {/* Products */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-3 items-center gap-4 border-b border-gray-400 pb-4"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-2xl">{item.name}</h3>
                    <p className="text-gray-500 text-lg">{item.details}</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, "minus")}
                    className="p-2 border border-pink-400   hover:bg-gray-100 "
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-6 py-1 border border-pink-400 text-xl">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, "plus")}
                    className="p-2 border border-pink-400  hover:bg-gray-100"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                {/* Price + Delete together */}
                <div className="flex items-center justify-center gap-3 font-semibold">
                  <span>${item.price * item.qty}</span>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Cart Totals */}
        <div className=" p-6">
          <h2 className="text-4xl font-bold mb-6">Cart Totals</h2>
          <div className="flex justify-between py-2 border-b">
            <span className="font-bold text-3xl">Subtotal</span>
            <span className="text-2xl font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-bold text-3xl">Total</span>
            <span className="text-2xl font-bold">${subtotal.toFixed(2)}</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full border text-black py-2 transition text-2xl font-bold hover:bg-gray-300">
              Update Cart
            </button>
            <button className="w-full border font-bold text-black py-2 transition text-2xl hover:bg-pink-300">
              Continue Shopping
            </button>
            <button className="w-full border font-bold   text-black py-2 transistion text-2xl  hover:bg-pink-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;


