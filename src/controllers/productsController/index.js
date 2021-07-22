const products = require('../../../data');
const { removeDuplicatedItems } = require('../../utils');

const listProducts = (req, res) => {
    const { category, initialPrice, finalPrice } = req.query;

    let allProducts = products;

    if (category) {
        const filteredProductsByCategory
            = allProducts.filter(produto => produto.category === category);
        allProducts = filteredProductsByCategory;
    }

    if (initialPrice) {
        const filteredProductsByInitialPrice
            = allProducts.filter(produto => produto.price >= initialPrice);
        allProducts.push(...filteredProductsByInitialPrice);
    }

    if (finalPrice) {
        const filteredProductsByFinalPrice
            = allProducts.filter(produto => produto.price <= finalPrice);
        allProducts.push(...filteredProductsByFinalPrice);
    }

    const uniqueProducts = removeDuplicatedItems(allProducts);

    return res.json({ uniqueProducts });
}

module.exports = { listProducts };