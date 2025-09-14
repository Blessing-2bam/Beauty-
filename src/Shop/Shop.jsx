import React, { useState } from "react";
import { Search } from "lucide-react"; // search icon
import img1 from "../assets/item-1.jpg";
import img2 from "../assets/item-2.jpg";
import img3 from "../assets/item-3.jpg";
import img4 from "../assets/item-4.jpg";
import img5 from "../assets/item-5.jpg";
import img6 from "../assets/item-6.jpg";
import img7 from "../assets/item-7.jpg";

const Gallerys = () => {
  const products = [
    { id: 1, name: "Nail Polish", price: 20, img: img1, category: "Makeup", brand: "Dior", tags: ["Luxury"] },
    { id: 2, name: "Hand Cream", price: 15, img: img2, category: "Skincare", brand: "Chanel", tags: ["Organic"] },
    { id: 3, name: "Lip Gloss", price: 25, img: img3, category: "Makeup", brand: "Gucci", tags: ["Trending"] },
    { id: 4, name: "Perfume", price: 40, img: img4, category: "Fragrance", brand: "YSL", tags: ["Luxury"] },
    { id: 5, name: "Perfume Special", price: 35, img: img5, category: "Fragrance", brand: "Chanel", tags: ["Sale"] },
    { id: 6, name: "Face Serum", price: 55, img: img6, category: "Skincare", brand: "Dior", tags: ["Trending"] },
    { id: 7, name: "Lipstick", price: 30, img: img7, category: "Makeup", brand: "Gucci", tags: ["Luxury"] },
  
    { id: 4, name: "Perfume", price: 40, img: img4, category: "Fragrance", brand: "YSL", tags: ["Luxury"] },
    { id: 5, name: "Perfume Special", price: 35, img: img5, category: "Fragrance", brand: "Chanel", tags: ["Sale"] },
    { id: 6, name: "Face Serum", price: 55, img: img6, category: "Skincare", brand: "Dior", tags: ["Trending"] },
    { id: 7, name: "Lipstick", price: 30, img: img7, category: "Makeup", brand: "Gucci", tags: ["Luxury"] },
  ];

  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState(100);

  // ✅ new sorting state
  const [sortOption, setSortOption] = useState("default");

  // ✅ pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Toggle filter selection
  const toggleFilter = (value, setState, state) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categories.length === 0 || categories.includes(product.category);
    const matchesTags = tags.length === 0 || product.tags.some((t) => tags.includes(t));
    const matchesBrand = brands.length === 0 || brands.includes(product.brand);
    const matchesPrice = product.price <= price;

    return matchesSearch && matchesCategory && matchesTags && matchesBrand && matchesPrice;
  });

  // ✅ Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceLowHigh") {
      return a.price - b.price;
    }
    if (sortOption === "priceHighLow") {
      return b.price - a.price;
    }
    if (sortOption === "nameAZ") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "nameZA") {
      return b.name.localeCompare(a.name);
    }
    return 0; // default (no sorting)
  });

  // ✅ Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="flex w-full min-h-screen my-30 ">
      {/* Sidebar - 25% */}
      <aside className="w-1/4  p-6  border-gray-200">
        {/* Search */}
        <h2 className="text-xl font-semibold mb-4">Search</h2>
        <div className="flex items-center border overflow-hidden mb-6">
          <input
            type="text"
            placeholder="Search for Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none"
          />
          <button className="text-gray-500 px-3 py-2 hover:bg-pink-600 flex items-center">
            <Search size={20} />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-6 border p-7">
          <h3 className="font-bold mb-2 border-b text-xl">Categories</h3>
          <ul className="space-y-2 text-gray-700">
            {["Makeup", "Skincare", "Fragrance", "Accessories"].map((cat) => (
              <li
                key={cat}
                onClick={() => toggleFilter(cat, setCategories, categories)}
                className={`cursor-pointer ${categories.includes(cat) ? "text-pink-600 font-semibold" : ""}`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mb-6 border p-7">
          <h3 className="font-bold mb-2 border-b text-xl">Tags</h3>
          <ul className="space-y-2 text-gray-700">
            {["Luxury", "Organic", "Trending", "Sale"].map((tag) => (
              <li
                key={tag}
                onClick={() => toggleFilter(tag, setTags, tags)}
                className={`cursor-pointer ${tags.includes(tag) ? "text-pink-600 font-semibold" : ""}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div className="mb-6 border p-7">
          <h3 className="font-bold mb-2 border-b text-xl">Brands</h3>
          <ul className="space-y-2 text-gray-700">
            {["Dior", "Chanel", "Gucci", "YSL"].map((brand) => (
              <li
                key={brand}
                onClick={() => toggleFilter(brand, setBrands, brands)}
                className={`cursor-pointer ${brands.includes(brand) ? "text-pink-600 font-semibold" : ""}`}
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>

        {/* Filter by Price */}
        <div>
          <h3 className="font-bold mb-2">Filter by Price</h3>
          <input
            type="range"
            min="10"
            max="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-pink-500"
          />
          <p className="text-sm mt-2 text-gray-600">Up to ${price}</p>
        </div>
      </aside>

      {/* Products - 75% */}
      <main className="w-3/4 p-8">
        {/* Sorting & Results Row */}
        <div className="flex justify-between items-center mb-6">
          {/* Results count */}
          <p className="text-gray-600 text-xl">
            Showing {indexOfFirstProduct + 1}–
            {Math.min(indexOfLastProduct, sortedProducts.length)} of {products.length} results
          </p>

          {/* Sorting dropdown */}
          <select
            className=" px-3 py-2 text-gray-700 text-xl "
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default Sorting</option>
            <option value="priceLowHigh">Sort by Price: Low to High</option>
            <option value="priceHighLow">Sort by Price: High to Low</option>
            <option value="nameAZ">Sort by Name: A–Z</option>
            <option value="nameZA">Sort by Name: Z–A</option>
          </select>
        </div>

        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <span className="text-pink-600 font-bold">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found matching your filters.</p>
        )}

        {/* ✅ Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded hover:bg-pink-500 hover:text-white disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-pink-500 text-white" : "hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded hover:bg-pink-500 hover:text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </section>
  );
};

export default Gallerys;

