import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";
import team6 from "../assets/team6.jpg";

const Professionals = () => {
  const cardData = [
    { id: 1, image: team1, title: "Sophia Anderson" , description: "Manager" },
    { id: 2, image: team2, title: "Sophia Gill", description: "Pedicure Expert"  },
    { id: 3, image: team3, title: "Anna Smith", description: "Manicure Expert"  },
    { id: 4, image: team4, title: "Keth Jenner", description: "Nail Artist"  },
    { id: 5, image: team5, title: "Anna Will", description: "Senior Stylist"  },
    { id: 6, image: team6, title: "Jenny Tom", description: "Nail Specialist"  },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-6 mt-40 mb-20">
      <h2 className="text-6xl text-center mb-12 text-black tracking-wide font-light">
        Our Professionals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="shadow-md overflow-hidden group hover:shadow-xl transform transition duration-300 flex flex-col"
          >
            {/* Image with overlay */}
            <div className="relative overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay with icons */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-500">
                <a
                  href="#"
                  className="bg-pink-500 text-white p-3 rounded-full transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 delay-100"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-pink-500 text-white p-3 rounded-full transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 delay-200"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-pink-500 text-white p-3 rounded-full transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 delay-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Text */}
            <div className="p-4 text-center flex-grow">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              {card.description && (
                <p className="text-gray-500 text-sm mt-1">{card.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
