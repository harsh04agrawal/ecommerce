import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/CSS/home.css'; // Importing the CSS file for styling
import placeholder from '../../src/assets/placeholder.png'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" onError={(e) => e.target.src = placeholder} />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>By {product.author}</p>
              <p className="price">${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
