import React from "react";
import service_img1 from "../assets/service-img1.jpg";
import service_img2 from "../assets/service-img2.jpg";
import service_img3 from "../assets/service-img3.jpg";
import service_img4 from "../assets/service-img4.jpg";
import service_img5 from "../assets/service-img5.jpg";
import service_img6 from "../assets/service-img6.jpg";
import service_img7 from "../assets/service-img7.jpg";
import service_img8 from "../assets/service-img8.jpg";
import bgImage from "../assets/background-1.jpg";

const Services = () => {
  const cardData = [
    { id: 1, image: service_img5, title: "Hydra Facial" },
    { id: 2, image: service_img3, title: "Art Nail & Effects" },
    { id: 3, image: service_img7, title: "Paraffin For Nail Hands" },
    { id: 4, image: service_img8, title: "Glitter For Nail Hands" },
    { id: 5, image: service_img2, title: "Classic Nail Manicure" },
    { id: 6, image: service_img1, title: "Eyelashes Extensions" },
    { id: 7, image: service_img4, title: "Pedicure" },
    { id: 8, image: service_img6, title: "Deep Paraffin Waxing" },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center" }}
    >
      
      

      {/* Foreground content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-6xl text-center mb-12 text-gray-900 tracking-wide">
          Services We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white border-8 border-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl hover:-translate-y-2 transform transition duration-300 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 text-center flex-grow">
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
