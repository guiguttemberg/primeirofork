const Router = require('express');
const products = require('./controladores/produtos');

const route = Router();

route.get('/health', (req, res) => {
  return res.json({ message: 'Health Check!' });
});

route.get('/products', products.listProducts);

module.exports = { route };