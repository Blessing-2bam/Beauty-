

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import Beauty_logo from '../assets/Beauty-logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-xl">
        
        {/* Column 1 - Logo / About */}
        <div>
          <img src={Beauty_logo} alt=""  className="mb-4"/>
          <p className="text-sm mb-6">
            Bringing beauty and elegance to your nails with professional care and creativity.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-pink-200 text-pink-200 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-pink-200 text-pink-200 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-pink-200 text-pink-200 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-pink-200 text-pink-200 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              <FaPinterestP />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-pink-200 text-pink-200 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Services</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-500 transition">Payment</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Shipping</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Product Return</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Checkouts</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Other issues</a></li>
            
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Beauty Street, Lagos</li>
            <li>📞 (666) 333-9999</li>
            <li>✉️ info@mybrand.com</li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4 ">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to get our latest updates and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md focus:outline-none text-gray-800"
            />
            <button className="bg-pink-600 text-white px-4 rounded-r-md hover:bg-pink-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Blessing Orji. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
