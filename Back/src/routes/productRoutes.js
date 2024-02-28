const { Router } = require("express");
const getProductsHndls = require("../handlers/ProductsHndls/getProductsHndls");
const postProductsHndls = require("../handlers/ProductsHndls/postProductsHndls");

const productRoutes = Router();

productRoutes.get("/", getProductsHndls);
productRoutes.post("/", postProductsHndls);

module.exports = productRoutes;
