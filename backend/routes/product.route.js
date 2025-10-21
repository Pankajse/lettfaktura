const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { addProduct, updateProduct, getAllProducts, addProducts } = require("../controllers/product.controller");
const router = express.Router();

router.post("/add", authMiddleware, addProduct);
router.post("/addBulk", authMiddleware, addProducts);
router.get("/getAll", authMiddleware, getAllProducts);
router.put("/update/:id", authMiddleware, updateProduct);

module.exports = router;