const express = require('express');
const Order = require('../models/order');

const router = express.Router();

// Create an order
router.post('/', async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).send('Order created');
});

module.exports = router;
