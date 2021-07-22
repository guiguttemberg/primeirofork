const produtos = require('../../dados');

const listarProdutos = (req, res) => {
    const { initialPrice, finalPrice } = req.query

    const todosProdutos = [];

    if (initialPrice) {
        const produtosEncontrados = produtos.filter(produto => produto.price >= initialPrice);
        todosProdutos.push(...produtosEncontrados);
    }

    if (finalPrice) {
        const produtosEncontrados = produtos.filter(produto => produto.price <= finalPrice);
        todosProdutos.push(...produtosEncontrados);
    }

    return res.json({ todosProdutos });
}

module.exports = { listarProdutos };