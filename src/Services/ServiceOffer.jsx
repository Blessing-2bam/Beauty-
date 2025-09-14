import React, { useState } from "react";
import service_img1 from "../assets/service-img1.jpg";
import service_img2 from "../assets/service-img2.jpg";
import service_img3 from "../assets/service-img3.jpg";
import service_img4 from "../assets/service-img4.jpg";
import service_img5 from "../assets/service-img5.jpg";
import service_img6 from "../assets/service-img6.jpg";
import service_img7 from "../assets/service-img7.jpg";
import service_img8 from "../assets/service-img8.jpg";


const ServiceOffer = () => {
  const cardData = [
    { id: 1, image: service_img5, title: "Hydra Facial" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more" },
    { id: 2, image: service_img3, title: "Art Nail & Effects" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 3, image: service_img7, title: "Paraffin For Nail Hands" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 4, image: service_img8, title: "Glitter For Nail Hands" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 5, image: service_img2, title: "Classic Nail Manicure" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 6, image: service_img1, title: "Eyelashes Extensions" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 7, image: service_img4, title: "Pedicure" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 8, image: service_img6, title: "Deep Paraffin Waxing" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 9, image: service_img1, title: "Eyelashes Extensions" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 10, image: service_img4, title: "Pedicure" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 11, image: service_img6, title: "Deep Paraffin Waxing" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
    { id: 12, image: service_img1, title: "Eyelashes Extensions" , description: "Consequatur iure et, ullam tempora voluptatem dolorem corrupti. Consequuntur quos pariatur, consequatur repellendus ipsum nesciunt laboriosam.Learn more"},
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; // how many cards per page

  // Pagination logic
  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <section
      className="relative py-20 bg-cover bg-gray-50 "
      >
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-6xl text-center mb-12 text-gray-800  tracking-wide">
          Services We Offer
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border-8 border-white overflow-hidden group hover:shadow-xl hover:-translate-y-2 transform transition duration-300 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 flex-grow">
                <h3 className="text-2xl pb-5">{card.title}</h3>
                <p className="text-lg text-gray-600">{card.description} </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          {/* Previous */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1
                  ? "bg-pink-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceOffer;
