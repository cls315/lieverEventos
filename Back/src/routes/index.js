const { Router } = require("express");

const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");

const router = Router();

router.use("/product", productRoutes);
router.use("/user", userRoutes);

module.exports = router;
