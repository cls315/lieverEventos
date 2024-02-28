const postProducts = require("../../controllers/Products/postProducts");

const postProductsHndls = async (req, res) => {
  const { name, description, image, value, stock } = req.body;

  try {
    const newProduct = await postProducts(
      name,
      description,
      image,
      value,
      stock
    );

    console.log(newProduct);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = postProductsHndls;
