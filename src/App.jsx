import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Global reusable components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Button from "./components/Button";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Gallery from "./Pages/Gallerys";
import Shop from "./Pages/Shops";
import SingleProduct from "./Pages/Single";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Services from "./Pages/Services";
import ServicesDetails from "./Pages/ServicesDetails";
import Blog from "./Pages/Blogs";

function App() {
  return (
    <Router basename="/Beauty-/">
      <div style={{ fontFamily: "'Cormorant Upright', serif" }}>
        {/* Navbar always visible */}
        <Navbar />

        {/* Page Content */}
        <div className="pt-16">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/single" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/services/category1" element={<Services/>} />
          <Route path="/services/category2" element={<ServicesDetails/>} />
          <Route path="/blog/category1" element={<Blog/>} />
          
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>


        </div>
        
        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
