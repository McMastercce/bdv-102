const Customer = require('../../models/Customer');

// The orm CustomerController uses an ORM to handle requests to the database,
// from javascript to implements the following operations:
//
// 1. Fetch a customer by ID
// 2. Fetch all customers
// 3. Create a customer
// 4. Update a customer
// 5. Delete a customer
// 6. Delete all Customers 

// fetch a customer by id
module.exports.getSingleCustomerById = async (req, res) => {
  try {
    // find customer by primary key
    id = req.params.id;
    const customer = await Customer.findByPk(id);
    if (customer) {
        // if Customer found return 200 OK with customer data
        res.status(200).json(customer);
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    console.error(`Error fetching customer with ID ${id}:`, error);
    // if error return 500 Internal server error
    res.status(500).json({ error: 'Internal server error' });
  }
}

// fetch all customers
module.exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Create a Customer
module.exports.createCustomer = async (req, res) => {
    try {
        b = req.body;
        console.log(b);
        const customer = await Customer.create(req.body);
        return res.status(201).json(customer);
    } catch (error) {
        console.error('Error creating customer:', error);
        return res.status(400).json({ error: error.message });
    }
}

// Update a Customer
module.exports.updateCustomer = async (req, res) => {
    try {
        // find customer by primary key
        id = req.params.id;
        const customer = await Customer.findByPk(id);
        if (customer) {
            // if Customer found update customer with new data
            await customer.update(req.body);
            // return 200 OK with updated customer data
            res.status(200).json(customer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        console.error(`Error updating customer with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Delete a Customer
module.exports.deleteCustomer = async (req, res) => {
    try {
        // find customer by primary key
        id = req.params.id;
        const customer = await Customer.findByPk(id);
        if (customer) {
            // if Customer found delete customer
            await customer.destroy();
            // return 200 OK with success message
            res.status(200).json({ message: 'Customer deleted successfully' });
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        console.error(`Error deleting customer with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Delete all Customers
module.exports.deleteAllCustomers = async (req, res) => {
    try {
        // fetch all customers
        const customers = await Customer.findAll();
        // if customers found delete all customers
        if (customers) {
            await Customer.destroy({
                where: {},
                truncate: true
            });
            // return 200 OK with success message
            res.status(200).json({ message: 'All customers deleted successfully' });
        } else {
            res.status(404).json({ error: 'Customers not found' });
        }
    } catch (error) {
        console.error(`Error deleting all customers:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
}