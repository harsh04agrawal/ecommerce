import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.author}</p>
            <p>${product.price}</p>
            <img src={product.imageUrl} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
