import React, { useState } from "react";
import { Link } from "react-router-dom";  // ✅ import Link
import { Search } from "lucide-react"; 
import Beauty_logo from "../assets/Beauty-logo.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav
      style={{ fontFamily: "'Cormorant Upright', serif" }}
      className="bg-pink-50 shadow-md fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center ">
          {/* Logo */}
          <div>
            <img src={Beauty_logo} alt="Beauty logo" className="h-10" />
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8 items-center text-[20px] font-medium">
            {/* Home */}
            <Link to="/" className="text-black hover:text-pink-300 transition-colors">
              Home
            </Link>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-pink-300 transition-colors">
                Pages <span className="ml-1 text-2xl">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <Link to="/about" className="block px-4 py-2 hover:bg-pink-200">
                  About us
                </Link>
                <Link to="/appointment" className="block px-4 py-2 hover:bg-pink-200">
                  Appointment
                </Link>
                <Link to="/gallery" className="block px-4 py-2 hover:bg-pink-200">
                  Gallery
                </Link>
              </div>
            </div>

            {/* Shop Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-pink-300 transition-colors">
                Shop <span className="ml-1 text-2xl">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <Link to="/shop" className="block px-4 py-2 hover:bg-pink-200">
                  Shop
                </Link>
                <Link to="/single" className="block px-4 py-2 hover:bg-pink-200">
                  Single Products
                </Link>
                <Link to="/cart" className="block px-4 py-2 hover:bg-pink-200">
                  Cart
                </Link>
                <Link to="/checkout" className="block px-4 py-2 hover:bg-pink-200">
                  Checkout
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-pink-300 transition-colors">
                Services <span className="ml-1 text-2xl">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white  rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <Link to="/services/category1" className="block px-4 py-2 hover:bg-pink-200 text-lg">
                  Services
                </Link>
                <Link to="/services/category2" className="block px-4 py-2 hover:bg-pink-200 text-lg">
                  Services-Details
                </Link>
              </div>
            </div>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-pink-300 transition-colors">
                Blog <span className="ml-1 text-2xl">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white  rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <Link to="/blog/category1" className="block px-4 py-2 hover:bg-pink-200 text-lg">
                  Blog
                </Link>
                
              </div>
            </div>

            {/* Contact */}
            <Link to="/contact" className="text-black hover:text-pink-300 transition-colors">
              Contact
            </Link>

            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-black hover:text-pink-300 transition-colors"
            >
              <Search size={22} />
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
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { Search } from "lucide-react"; 
// import Beauty_logo from "../assets/Beauty-logo.png";

// const Navbar = () => {
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <nav
//       style={{ fontFamily: "'Cormorant Upright', serif" }}
//       className="bg-pink-50 shadow-md fixed top-0 w-full z-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center ">
//           {/* Logo */}
//           <div>
//             <img src={Beauty_logo} alt="Beauty logo" className="h-10" />
//           </div>

//           {/* Links */}
//           <div className="hidden md:flex space-x-8 items-center text-[20px] font-medium">
//             <a
//               href="#"
//               className="text-black hover:text-pink-300 transition-colors"
//             >
//               Home
//             </a>

//             {/* Pages Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-black hover:text-pink-300 transition-colors">
//                 Pages <span className="ml-1 text-2xl">▾</span>
//               </button>
//               <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-pink-200 transition-colors"
//                 >
//                   About us
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-pink-200 transition-colors"
//                 >
//                   Appointment
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-pink-200 transition-colors"
//                 >
//                   Gallery
//                 </a>
//               </div>
//             </div>

//             {/* Shop Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-black hover:text-pink-300 transition-colors">
//                 Shop <span className="ml-1 text-2xl">▾</span>
//               </button>
//               <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-pink-200 transition-colors"
//                 >
//                   Shop
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-pink-200 transition-colors"
//                 >
//                   Single Products
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-pink-200 transition-colors"
//                 >
//                   Cart
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-pink-200 transition-colors"
//                 >
//                   Checkout
//                 </a>
//               </div>
//             </div>

//             {/* Services Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-black hover:text-pink-300 transition-colors">
//                 Services <span className="ml-1 text-2xl">▾</span>
//               </button>
//               <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-pink-200 transition-colors"
//                 >
//                   Category 1
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-purple-100 transition-colors"
//                 >
//                   Category 2
//                 </a>
//               </div>
//             </div>

//             {/* Blog Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-black hover:text-purple-600 transition-colors">
//                 Blog <span className="ml-1 text-2xl">▾</span>
//               </button>
//               <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-purple-100 transition-colors"
//                 >
//                   Category 1
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-black hover:bg-purple-100 transition-colors"
//                 >
//                   Category 2
//                 </a>
//               </div>
//             </div>

//             <a
//               href="#"
//               className="text-black hover:text-pink-300 transition-colors"
//             >
//               Contact
//             </a>

//             {/* 🔍 Search Button */}
//             <button
//               onClick={() => setShowSearch(!showSearch)}
//               className="text-black hover:text-pink-300 transition-colors"
//             >
//               <Search size={22} />
//             </button>
//           </div>
//         </div>

//         {/* Search Input */}
//         {showSearch && (
//           <div className="mt-2 flex justify-end">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-300"
//             />
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
