import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import Beauty_logo from "../assets/Beauty-logo.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open (mobile only)

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav
      style={{ fontFamily: "'Cormorant Upright', serif" }}
      className="bg-pink-50 shadow-md fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div>
            <img src={Beauty_logo} alt="Beauty logo" className="h-10" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center text-[20px] font-medium">
            <Link to="/" className="text-black hover:text-pink-300 transition-colors">Home</Link>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-pink-300 transition-colors">
                Pages <span className="ml-1 text-2xl">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <Link to="/about" className="block px-4 py-2 hover:bg-pink-200">About us</Link>
                <Link to="/appointment" className="block px-4 py-2 hover:bg-pink-200">Appointment</Link>
                <Link to="/gallery" className="block px-4 py-2 hover:bg-pink-200">Gallery</Link>
              </div>
            </div>

            {/* Shop Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-pink-300 transition-colors">
                Shop <span className="ml-1 text-2xl">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <Link to="/shop" className="block px-4 py-2 hover:bg-pink-200">Shop</Link>
                <Link to="/single" className="block px-4 py-2 hover:bg-pink-200">Single Products</Link>
                <Link to="/cart" className="block px-4 py-2 hover:bg-pink-200">Cart</Link>
                <Link to="/checkout" className="block px-4 py-2 hover:bg-pink-200">Checkout</Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-pink-300 transition-colors">
                Services <span className="ml-1 text-2xl">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <Link to="/services/category1" className="block px-4 py-2 hover:bg-pink-200 text-lg">Services</Link>
                <Link to="/services/category2" className="block px-4 py-2 hover:bg-pink-200 text-lg">Services-Details</Link>
              </div>
            </div>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-pink-300 transition-colors">
                Blog <span className="ml-1 text-2xl">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <Link to="/blog/category1" className="block px-4 py-2 hover:bg-pink-200 text-lg">Blog</Link>
              </div>
            </div>

            {/* Contact */}
            <Link to="/contact" className="text-black hover:text-pink-300 transition-colors">Contact</Link>

            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-black hover:text-pink-300 transition-colors"
            >
              <Search size={22} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-pink-300"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Search Input */}
        {showSearch && (
          <div className="mt-2 flex justify-end">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded shadow-lg mt-2 p-4 text-lg space-y-2">
            <Link to="/" className="block hover:text-pink-300">Home</Link>

            {/* Pages Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("pages")}
                className="flex justify-between w-full hover:text-pink-300"
              >
                Pages <ChevronDown size={20} />
              </button>
              {openDropdown === "pages" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/about" className="block hover:text-pink-300">About us</Link>
                  <Link to="/appointment" className="block hover:text-pink-300">Appointment</Link>
                  <Link to="/gallery" className="block hover:text-pink-300">Gallery</Link>
                </div>
              )}
            </div>

            {/* Shop Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("shop")}
                className="flex justify-between w-full hover:text-pink-300"
              >
                Shop <ChevronDown size={20} />
              </button>
              {openDropdown === "shop" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/shop" className="block hover:text-pink-300">Shop</Link>
                  <Link to="/single" className="block hover:text-pink-300">Single Products</Link>
                  <Link to="/cart" className="block hover:text-pink-300">Cart</Link>
                  <Link to="/checkout" className="block hover:text-pink-300">Checkout</Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="flex justify-between w-full hover:text-pink-300"
              >
                Services <ChevronDown size={20} />
              </button>
              {openDropdown === "services" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/services/category1" className="block hover:text-pink-300">Services</Link>
                  <Link to="/services/category2" className="block hover:text-pink-300">Services-Details</Link>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("blog")}
                className="flex justify-between w-full hover:text-pink-300"
              >
                Blog <ChevronDown size={20} />
              </button>
              {openDropdown === "blog" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/blog/category1" className="block hover:text-pink-300">Blog</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="block hover:text-pink-300">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
