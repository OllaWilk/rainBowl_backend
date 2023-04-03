const express = require('express');
const { eventRouter } = require('./routers/event');
const { orderRouter } = require('./routers/order');
const { productRouter } = require('./routers/product');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));
app.use(express.json());

app.get('/product', productRouter);
app.get('/event', eventRouter);
app.get('/order', orderRouter);

app.listen(3000, 'localhost', () =>
  console.log('server is runing on http://localhost:3000')
);
