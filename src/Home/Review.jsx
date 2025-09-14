import React, { useState } from "react";
import reviewer1 from "../assets/reviewer1.jpg";
import reviewer2 from "../assets/reviewer2.jpg";
import reviewer3 from "../assets/reviewer3.jpg";
import service_img7 from '../assets/service-img7.jpg'

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Noran Sharan",
      role: "Sam Mom",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque porro voluptate deserunt corrupti eum iusto, quibusdam dolorum ipsum quo, ut quae nobis! Voluptatum.",
      image: reviewer1,
    },
    {
      id: 2,
      name: "Anna Smith",
      role: "Beauty Enthusiast",
      text: "Dolorum ipsum quo, ut quae nobis! Voluptatum iusto animi consequatur alias fugiat dolorem amet.",
      image: reviewer2,
    },
    {
      id: 3,
      name: "Sophia Johnson",
      role: "Stylist",
      text: "Accusamus labore dolorum fuga fugiat eveniet quae quasi nesciunt unde voluptates laborum explicabo.",
      image: reviewer3,
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section
  className="px-6 bg-cover bg-no-repeat bg-fixed min-h-[700px] flex items-center"
  style={{
    backgroundImage: `url(${service_img7})`,
    backgroundPosition: "center",
  }}
>
  <div className="max-w-4xl mx-auto bg-white shadow-lg p-10">
    {/* Outer container clips extra slides */}
    <div className="relative overflow-hidden">
      {/* Sliding Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex items-center gap-6 flex-shrink-0 w-full"
          >
            {/* Reviewer Image */}
            <div className="w-44 h-44 flex-shrink-0">
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Review Content */}
            <div>
              <p className="text-gray-700 text-xl mb-4">"{review.text}"</p>
              <h3 className="text-4xl font-semibold text-gray-700">
                {review.name}
              </h3>
              <p className="text-lg text-gray-600">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Dots Indicator */}
    <div className="flex justify-center mt-6 gap-2">
      {reviews.map((_, index) => (
        <span
          key={index}
          onClick={() => setCurrent(index)}
          className={`w-4 h-4 rounded-full cursor-pointer transition ${
            current === index ? "bg-pink-600" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  </div>
</section>

      );
};

export default Review;
