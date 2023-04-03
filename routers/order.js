const express = require('express');

const orderRouter = express.Router();

orderRouter.get('/order', (req, res) => {
  res.send('order');
});

module.exports = {
  orderRouter,
};
