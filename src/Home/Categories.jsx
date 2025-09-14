import { Icon } from "@iconify/react";


const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          
          {/* Item 1 */}
          <div>
            <iconify-icon
              class="text-pink-500 text-6xl mx-auto mb-4"
              icon="solar:medal-ribbons-star-outline"
            ></iconify-icon>
            <h3 className="text-xl font-semibold mb-2">10+ Years of Experience</h3>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipi elit. Lorem ipsum dolor sit.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <iconify-icon
              class="text-pink-500 text-6xl mx-auto mb-4"
              icon="ph:plant"
            ></iconify-icon>
            <h3 className="text-xl font-semibold mb-2">100% Natural Products</h3>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipi elit. Lorem ipsum dolor sit.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <iconify-icon
              class="text-pink-500 text-6xl mx-auto mb-4"
              icon="solar:chat-round-like-broken"
            ></iconify-icon>
            <h3 className="text-xl font-semibold mb-2">12k+ Satisfied Clients</h3>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipi elit. Lorem ipsum dolor sit.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <iconify-icon
              class="text-pink-500 text-6xl mx-auto mb-4"
              icon="solar:people-nearby-outline"
            ></iconify-icon>
            <h3 className="text-xl font-semibold mb-2">28 Specialists Team</h3>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipi elit. Lorem ipsum dolor sit.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;
