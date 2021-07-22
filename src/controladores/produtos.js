const produtos = require('../../dados');

const listarProdutos = (req, res) => {
    const { category } = req.query;

    const allProducts = [];

    if (category) {
        const filteredProducts = produtos.filter(produto => produto.category === category);
        allProducts.push(...filteredProducts);
    }

    return res.json({ allProducts });
}

module.exports = { listarProdutos };