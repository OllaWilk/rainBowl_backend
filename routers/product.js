const express = require('express');

const productRouter = express.Router();

productRouter.get('/product', (req, res) => {
  res.send('product');
});

module.exports = {
  productRouter,
};
