import React, { useEffect, useState } from "react";
import axios from "axios";
import './products.css';

function Categorydropdown() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const categoriesApi = 'https://fakestoreapi.com/products/categories';
  const productsApi = 'https://fakestoreapi.com/products/category';
  const imageWidth = 200;
  const imageHeight = 200;

  useEffect(() => {
    axios.get(categoriesApi).then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Fetch products for the selected category when selectedCategory changes
      axios.get(`${productsApi}/${selectedCategory}`).then((response) => {
        setProducts(response.data);
      });
    }
  }, [selectedCategory]);

  return (
    <>
      <div className="categories">
        {/* Render a dropdown to select the category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="products-list">
        {products.map((product, i) => (
          <div key={i}>
            <p>{i + 1}.{product.title}</p>
            <img
              src={product.image}
              alt={product.title}
              width={imageWidth}
              height={imageHeight}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Categorydropdown;