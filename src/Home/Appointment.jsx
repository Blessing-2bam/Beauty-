import React from 'react';
import background_1 from '../assets/background-1.jpg'
import Button from '../components/Button';

const Appointment = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 bg-cover bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url(${background_1})`, backgroundPosition: "center" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-6xl mb-2">Make An Appointment</h3>
          <p className="text-gray-600 pt-4 text-lg">Call: 666 333 9999 or fill in the form below</p>
        </div>

        {/* Form */}
        <form className="  rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg ">
          {/* Name */}
          <input
            type="text"
            placeholder="Write Your Name Here"
            className="border border-white bg-white p-3 w-full focus:outline-none "
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Write Your Email Here "
            className="border border-white bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Contact Number"
            className="border border-white bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Date */}
          <input
            type="number" placeholder='No of people'
            className="border border-white bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Time */}
          <input
            type="date"
            className="border border-white bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Service */}
          <input
            type="time"
            placeholder="Service You Want"
            className="border border-white bg-white p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Message (full width) */}
          <textarea
            placeholder="Your Message"
            className="border border-white bg-white p-3 w-full md:col-span-2 h-32 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Submit button (full width) */}
          {/* Submit button (full width) */} 
<div className="md:col-span-2 flex justify-center">
  <Button className="px-10 py-4">SEE ALL SERVICES</Button>
</div>

        </form>
      </div>
    </section>
  );
};

export default Appointment;
      