const getProducts = require("../../controllers/Products/getProducts");
const getProductsByName = require("../../controllers/Products/getProductsByName");

const getProductsHndls = async (req, res) => {
  const { name } = req.query;
  try {
    const products = name ? await getProductsByName(name) : await getProducts();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProductsHndls;
