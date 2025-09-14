import React from 'react'
import service_img1 from '../assets/service-img1.jpg'
import service_img2 from '../assets/service-img2.jpg'
import service_img4 from '../assets/service-img4.jpg'
import service_img5 from '../assets/service-img5.jpg'
import service_img6 from '../assets/service-img6.jpg'
import service_img7 from '../assets/service-img7.jpg'
import service_img8 from '../assets/service-img8.jpg'
import service_img3 from '../assets/service-img3.jpg'
import background_img2 from '../assets/background-2.jpg'



const PricePackages = () => {
  const packages = [
    { id: 1, title: "Gel Nail Extensions", price: "$130.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: service_img3 },
    { id: 2, title: "Manicure", price: "$95.00", description: "Accusamus labore dolorum fuga fugiat eveniet quae nesciunt unde.", image: service_img2 },
    { id: 3, title: "Eyelashes Extension", price: "$110.00", description: "Aspernatur ratione accusamus labore dolorum fuga fugiat.", image: service_img1 },
    { id: 4, title: "Pedicure", price: "$85.00", description: "Quasi nesciunt unde aspernatur ratione, accusamus labore dolorum.", image: service_img4 },
    { id: 5, title: "Facial Treatment", price: "$150.00", description: "High-quality nail spa experience with premium products.", image: service_img5 },
    { id: 6, title: "Paraffin For Nail Hands", price: "$120.00", description: "Classic French style with a modern twist.", image: service_img7 },
    { id: 7, title: "Nail Art", price: "$140.00", description: "Relaxing spa pedicure with massage.", image: service_img6 },
    { id: 8, title: "Nail Polishing", price: "$60.00", description: "Safe and fun nail polish designed for kids.", image: service_img8 },
  ]

  // Split into 2 groups of 4
  const firstGroup = packages.slice(0, 4)
  const secondGroup = packages.slice(4, 8)

  return (
    <section className="py-35 px-6 mt-20 bg-gray-50 bg-cover bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url(${background_img2})`, backgroundPosition: "center" }}>
      <h2 className="text-6xl  text-center mb-12 text-gray-800">
         Price Packages
      </h2>

      {/* Flex two white backgrounds */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* First White Box */}
        <div className="bg-white shadow-md p-6 rounded-lg flex-1">
          {firstGroup.map((pkg) => (
            <div 
              key={pkg.id} 
              className="flex items-center p-8 mb-6 last:border-none last:pb-0 last:mb-0 hover:bg-gray-100"
            >
              {/* Image */}
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover " 
                />
              </div>

              {/* Details + Price */}
              <div className="flex justify-between items-center flex-grow ml-6 ">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-700">{pkg.title}</h3>
                  <p className="text-gray-500  text-xl mt-2">{pkg.description}</p>
                </div>
                <p className="text-gray-700   font-bold text-2xl ml-6 whitespace-nowrap">
                  {pkg.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second White Box */}
        <div className="bg-white shadow-md p-6 rounded-lg flex-1">
          {secondGroup.map((pkg) => (
            <div 
              key={pkg.id} 
              className="flex items-center  p-8 mb-6 last:border-none last:pb-0 last:mb-0 hover:bg-gray-100"
            >
              {/* Image */}
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Details + Price */}
              <div className="flex justify-between items-center flex-grow ml-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-700">{pkg.title}</h3>
                  <p className="text-gray-500 text-xl mt-2">{pkg.description}</p>
                </div>
                <p className="text-gray-700 font-bold text-2xl ml-6 whitespace-nowrap">
                  {pkg.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricePackages

