const produtos = require('../../dados');

const listarProdutos = (req, res) => {
    const { category } = req.query;

    const allProducts = [];

    if (category) {
        const filteredProductsByCategory = produtos.filter(produto => produto.category === category);
        allProducts.push(...filteredProductsByCategory);
    }

    return res.json({ allProducts });
}

module.exports = { listarProdutos };