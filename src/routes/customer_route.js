const express = require("express");
const router = express.Router();
const controllerPath = process.env.USE_SQL === 'yes' 
    ? "../controllers/sql/customer_controller" 
    : "../controllers/orm/customer_controller";

const CustomerController = require(controllerPath);

// Get a Customer by id
router.route("/customers/:id").get(CustomerController.getSingleCustomerById);
// Get all Customers
router.route("/customers").get(CustomerController.getAllCustomers);
// Create a Customer
router.route("/customers").post(CustomerController.createCustomer);
// Update a Customer
router.route("/customers/:id").put(CustomerController.updateCustomer);
// Delete a Customer
router.route("/customers/:id").delete(CustomerController.deleteCustomer);
// Delete all Customers
router.route("/customers").delete(CustomerController.deleteAllCustomers);
module.exports = router;