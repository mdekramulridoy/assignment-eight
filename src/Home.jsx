// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = ["All Products", ...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  return (
    <div className="flex mx-12 pb-14">
      <aside className="mt-20 w-3/12 p-4">
        <ul className="space-y-6">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`block w-full px-4 mt-1 py-4 text-left rounded-lg ${
                  selectedCategory === category ? "bg-purple-600 text-white text-xl font-bold" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Cutting-Edge Gadgets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;