// Home.js
import React from 'react';
import Navbar from '../components/navbar'
import Products from '../components/Products'; // Adjust the import based on your file structure
//import './Home.css'; // Optional: CSS file for styling

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Product List */}
      <Products />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Book Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
