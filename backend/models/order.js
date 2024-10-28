const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  products: [
    {
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true 
      },
      quantity: { 
        type: Number, 
        required: true 
      }
    }
  ],
  totalAmount: { 
    type: Number, 
    required: true 
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'card'],  // Ensure the payment method is either 'cash' or 'card'
    required: true
  },
  status: {
    type: String,
    default: 'pending'  // Default status, you can update later like 'paid' or 'shipped'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the Order model
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;