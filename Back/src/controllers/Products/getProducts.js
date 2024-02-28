const { Product } = require("../../db");

const getProducts = async () => {
  const products = await Product.findAll();

  const allProducts = products.map((p) => ({
    name: p.name,
    description: p.description,
    image: p.image,
    value: p.value,
    stock: p.stock,
  }));

  if (allProducts.length === 0) {
    console.error("No se encontraron productos");
  }

  return allProducts;
};

module.exports = getProducts;
