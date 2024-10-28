import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CartView from '../components/cartView';

const Cart = () => {
  return(
    <div>
      <Navbar/>
      <CartView/>
      <Footer/>
    </div>
  )
};


export default Cart;
