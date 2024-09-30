const express = require('express');

const router = express.Router();

// Cart operations (this could be expanded)
router.get('/', (req, res) => {
  res.send('Cart items');
});

module.exports = router;
