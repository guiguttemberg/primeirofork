const produtos = require('../../dados');

const listarProdutos = (req, res) => {
    return res.json({ produtos });
}

module.exports = { listarProdutos };