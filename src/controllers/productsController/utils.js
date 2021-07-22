function filterByCategory(products, category) {
  const allProducts = [];

  const filteredProductsByCategory
    = products.filter(produto => produto.category === category);
  allProducts.push(...filteredProductsByCategory);

  return allProducts;
}

function filterByPrice(products, initialPrice, finalPrice) {
  const allProducts = [];

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

  return allProducts;
}

module.exports = { filterByPrice, filterByCategory };