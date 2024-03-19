const express = require("express");
const router = express.Router();

const controllerPath = process.env.USE_SQL === 'yes' 
    ? "../controllers/sql/product_controller" 
    : "../controllers/orm/product_controller";

const ProductController = require(controllerPath);

// Get all products
router.route("/products").get(ProductController.getAllProducts);

// Get the product with id 'pid'
router.route("/products/:id").get(ProductController.getSingleProductById);

// Create a new product
router.route("/products").post(ProductController.createProduct);

// Update the product with id 'pid'
router.route("/products/:id").put(ProductController.updateProduct);

// Delete product with id 'pid' 
router.route("/products/:id").delete(ProductController.deleteProduct);

// Delete all products
router.route("/products").delete(ProductController.deleteAllProducts);

module.exports = router;