const Router = require('express');
const productsController = require('./controllers/productsController');

const route = Router();

route.get('/health', (req, res) => {
  return res.json({ message: 'Health Check!' });
});

route.get('/products', productsController.listProducts);

module.exports = { route };