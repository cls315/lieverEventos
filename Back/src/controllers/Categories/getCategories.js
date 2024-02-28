const { Categorie } = require("../../db");

const getCategories = async () => {
  const categorie = await Categorie.findAll();

  const allCategorie = categorie.map((c) => ({
    categorie: c.categorie,
  }));

  if (allCategorie.length === 0) {
    return "No se encontraron categorias";
  }

  return allCategorie;
};

module.exports = getCategories;
