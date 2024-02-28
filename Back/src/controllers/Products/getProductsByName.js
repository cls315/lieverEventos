const { Product } = require("../../db");
const { Op } = require("sequelize");

const getProductsByName = async (name) => {
  const productName = await Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  const allProducts = productName.map((p) => ({
    id: p.id,
    name: p.name,
    image: p.image,
    description: p.description,
    value: p.value,
    stock: p.stock,
  }));

  if (allProducts.length === 0) {
    return "No se encontraron resultados";
  }
  return allProducts;
};

module.exports = getProductsByName;
