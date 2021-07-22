const Router = require('express');
const produtos = require('./controladores/produtos');

const route = Router();

route.get('/health', (req, res) => {
  return res.json({ message: 'Health Check!' });
});

route.get('/products', produtos.listarProdutos);

module.exports = { route };