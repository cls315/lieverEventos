const { Product } = require("../../db");

const postProducts = async (name, description, image, value, stock) => {
  const newProduct = await Product.create({
    name,
    description,
    image,
    value,
    stock,
  });

  return newProduct;
};

module.exports = postProducts;
