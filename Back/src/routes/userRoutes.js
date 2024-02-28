const { Router } = require("express");
const getProductsHndls = require("../handlers/UserHndls/getUserHndls");
const postProductsHndls = require("../handlers/UserHndls/postUserHndls");

const userRoutes = Router();

userRoutes.get("/", getProductsHndls);
userRoutes.post("/", postProductsHndls);

module.exports = userRoutes;
