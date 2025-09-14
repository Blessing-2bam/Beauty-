import React, { useState } from "react";
import commemtor1 from '../assets/commentor-item2.jpg'
import commemtor2 from '../assets/commentor-item3.jpg'


const FullPageTabs = () => {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "Details" },
    { id: "howto", label: "How to Use" },
    { id: "shipping", label: "Shipping & Returns" },
    { id: "return", label: "Review" },
  ];

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-50 py-30">
      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 text-2xl font-semibold transition 
              ${
                activeTab === tab.id
                  ? "border-b-4 border-pink-400 text-pink-400"
                  : "text-gray-500 hover:text-pink-400"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto p-10 text-gray-700">
        {activeTab === "details" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Product Description</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Donec nec justo eget felis facilisis fermentum.</li>
              <li>Donec nec justo eget felis facilisis fermentum.</li>
              <li>Donec nec justo eget felis facilisis fermentum.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis.
            </p>
          </div>
        )}

        {activeTab === "howto" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Best ways to use</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur...
            </p>
          </div>
        )}

        {activeTab === "shipping" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Returns Policy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eros justo, accumsan non dui sit amet...
            </p>
            <br />
            <h1 className="text-3xl font-bold mb-4">Shipping</h1>
            <p>
              Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui,
              ultrices ut turpis pulvinar...
            </p>
          </div>
        )}

        {activeTab === "return" && (
          <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Review 1 */}
              <div className="flex items-start gap-4  p-6 ">
                <img
                  src={commemtor1}
                  alt="Reviewer"
                  className="w-25 h-25 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600">(4.5)</span>
                  </div>
                  <h3 className="font-semibold mt-1 text-xl">
                    Mark Johnson – 03/07/2024
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Vitae tortor condimentum lacinia quis vel eros donec ac. Nam
                    at lectus urna duis convallis convallis.
                  </p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="flex items-start gap-4  p-6 ">
                <img
                  src={commemtor2}
                  alt="Reviewer"
                  className="w-25 h-25 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600">(5.0)</span>
                  </div>
                  <h3 className="font-semibold mt-1 text-xl">
                    Sarah Lee – 02/15/2024
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Aliquam sem fringilla ut morbi tincidunt augue interdum.
                    Gravida arcu ac tortor dignissim convallis aenean et.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullPageTabs;
