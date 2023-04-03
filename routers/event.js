const express = require('express');

const eventRouter = express.Router();

eventRouter.get('/event', (req, res) => {
  res.send('event');
});

module.exports = {
  eventRouter,
};
