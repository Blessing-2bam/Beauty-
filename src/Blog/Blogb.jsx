import { useState } from "react";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";

const Blog = () => {
  const cardData = [
    { id: 1, image: blog1, date: "March 10, 2025", title: "Top 10 Nail Trends for 2025", description: "Discover the latest designs and colors that are making waves in the beauty world this year." },
    { id: 2, image: blog2, date: "March 3, 2025", title: "Benefits of a Pedicure Spa", description: "From relaxation to improved foot health, here’s why you should book your next pedicure." },
    { id: 3, image: blog3, date: "Feb 25, 2025", title: "How to Maintain Healthy Nails", description: "Simple tips and tricks to keep your nails strong, shiny, and beautiful every day." },
    { id: 4, image: blog4, date: "Feb 15, 2025", title: "Choosing the Right Nail Artist", description: "What to look for when picking the best nail artist for your style and needs." },
    { id: 5, image: blog4, date: "Feb 15, 2025", title: "Choosing the Right Nail Artist", description: "What to look for when picking the best nail artist for your style and needs." },
    { id: 6, image: blog3, date: "Feb 15, 2025", title: "Choosing the Right Nail Artist", description: "What to look for when picking the best nail artist for your style and needs." },
    { id: 7, image: blog1, date: "Feb 15, 2025", title: "Choosing the Right Nail Artist", description: "What to look for when picking the best nail artist for your style and needs." },
    { id: 8, image: blog2, date: "Feb 15, 2025", title: "Choosing the Right Nail Artist", description: "What to look for when picking the best nail artist for your style and needs." },
    { id: 9, image: blog4, date: "Feb 15, 2025", title: "Choosing the Right Nail Artist", description: "What to look for when picking the best nail artist for your style and needs." },
  ];

  // --- Pagination logic ---
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className=" max-w-8xl  px-6 pt-40 pb-40 bg-gray-50">
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentCards.map((card) => (
          <div
            key={card.id}
            className="shadow-md overflow-hidden group bg-white rounded-xl transform transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Blog Content */}
            <div className="p-5 text-left flex-grow">
              <p className="text-sm text-gray-400 mb-2">{card.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-pink-600 transition">
                {card.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                {card.description}{" "}
                <a href="#" className="text-gray-600 underline hover:text-pink-800 transition">
                  Read more
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-pink-100"
          }`}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === page
                ? "bg-pink-500 text-white border-pink-500"
                : "hover:bg-pink-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-pink-100"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;

