const products = require('../../dados');

const listProducts = (req, res) => {
    const { category, initialPrice, finalPrice } = req.query;

    const allProducts = [];

    if (category) {
        const filteredProductsByCategory
            = products.filter(produto => produto.category === category);
        allProducts.push(...filteredProductsByCategory);
    }

    if (initialPrice) {
        const filteredProductsByInitialPrice
            = products.filter(produto => produto.price >= initialPrice);
        allProducts.push(...filteredProductsByInitialPrice);
    }

    if (finalPrice) {
        const filteredProductsByFinalPrice
            = products.filter(produto => produto.price <= finalPrice);

        allProducts.push(...filteredProductsByFinalPrice);
    }

    return res.json({ allProducts });
}

module.exports = { listProducts };