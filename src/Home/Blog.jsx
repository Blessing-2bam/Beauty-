import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";
import Button from "../components/Button";

const Blog = () => {
  const cardData = [
    { 
      id: 1, 
      image: blog1, 
      date: "March 10, 2025", 
      title: "Top 10 Nail Trends for 2025", 
      description: "Discover the latest designs and colors that are making waves in the beauty world this year." 
    },
    { 
      id: 2, 
      image: blog2, 
      date: "March 3, 2025", 
      title: "Benefits of a Pedicure Spa", 
      description: "From relaxation to improved foot health, here’s why you should book your next pedicure." 
    },
    { 
      id: 3, 
      image: blog3, 
      date: "Feb 25, 2025", 
      title: "How to Maintain Healthy Nails", 
      description: "Simple tips and tricks to keep your nails strong, shiny, and beautiful every day." 
    },
    { 
      id: 4, 
      image: blog4, 
      date: "Feb 15, 2025", 
      title: "Choosing the Right Nail Artist", 
      description: "What to look for when picking the best nail artist for your style and needs." 
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-6 mt-40 mb-20">
      <h2 className="text-6xl text-center mb-12 text-black tracking-wide font-light">
        Latest Blog Updates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="shadow-md overflow-hidden group hover:shadow-xl transform transition duration-300 flex flex-col bg-white rounded-lg"
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
              {/* Date */}
              <p className="text-xl text-gray-400 mb-2">{card.date}</p>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-700 mb-3 hover:text-pink-600 transition">
                {card.title}
              </h3>

              {/* Paragraph */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {card.description}{" "}
  <a
    href="#"
    className="text-gray-600 underline hover:text-pink-800 transition"
  >
    Read more
  </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center m-15">
  <Button>Read All Blogs</Button> 
</div>
    </div>

    
  );

  
};

export default Blog;
