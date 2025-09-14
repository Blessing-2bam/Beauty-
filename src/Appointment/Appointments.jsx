import React, { useState } from 'react';
import Button from '../components/Button';
import About_img from '../assets/about-img.jpg';


const Appointments = () => {
  

  return (
    <section className="py-16 bg-gray-50 flex flex-col md:flex-row items-center md:justify-between ">
    
      

      {/* IMAGE / VIDEO TRIGGER */}
      <div className="mt-8 md:mt-0 relative">
        <img
          src={About_img}
          alt="Nail Salon"
          className=" w-[650px] h-auto object-cover cursor-pointer"
          
        />

        
      </div>


      
    
      <div className="max-w-3xl mx-auto">
  {/* Heading */}
  <div className="mb-4"> {/* changed from mb-12 to mb-4 */}
    <h3 className="text-7xl mb-2">Make An Appointment</h3>
    <p className="text-gray-600 text-2xl">
      Call: 666 333 9999 or fill in the form below
    </p>
  </div>

  {/* Form */}
  <form className="rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg ">
    {/* Name */}
    <input
      type="text"
      placeholder="Write Your Name Here"
      className="border border-gray-300 bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 "
    />

    {/* Email */}
    <input
      type="email"
      placeholder="Write Your Email Here"
      className="border border-gray-300 bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
    />

    {/* Phone */}
    <input
      type="tel"
      placeholder="Contact Number"
      className="border border-gray-300 bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
    />

    {/* People */}
    <input
      type="number"
      placeholder="No of people"
      className="border border-gray-300 bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
    />

    {/* Date */}
    <input
      type="date"
      className="border border-gray-300 bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
    />

    {/* Time */}
    <input
      type="time"
      className="border border-gray-300 bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
    />

    {/* Message (full width) */}
    <textarea
      placeholder="Your Message"
      className="border border-gray-300 bg-white p-3 w-full md:col-span-2 h-32 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />

    {/* Submit button (full width) */}
    <div className="md:col-span-2">
      <Button className="w-full py-4 text-lg">SEE ALL SERVICES</Button>
    </div>
  </form>
</div>

    </section>
  


      

      
      

  );
};

export default Appointments;
