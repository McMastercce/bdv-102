

// The raw_sql CustomerController shows the usage of raw_sql to connect to the database,
// from javascript to implements the following operations:
//
// 1. Fetch a customer by ID
// 2. Fetch all customers
// 3. Create a customer
// 4. Update a customer
// 5. Delete a customer
// 6. Delete all Customers 

// fetch a customer by id using raw SQL
module.exports.getSingleCustomerById = async (req, res) => {
    try {
        // find customer by primary key
        id = req.params.id;
        const result = await pool.query('SELECT * FROM customers WHERE customer_id = $1', [id]);
        if (result.rows.length > 0) {
            // if Customer found return 200 OK with customer data
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        console.error(`Error fetching customer with ID ${id}:`, error);
        // if error return 500 Internal server error
        res.status(500).json({ error: 'Internal server error' });
    }
};

// fetch all customers
module.exports.getAllCustomers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM customers');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a Customer using raw SQL
module.exports.createCustomer = async (req, res) => {
    // read the body of the request from http request 
    const { first_name, last_name, email, street_address, province, country, postal_code } = req.body;
    try {
      // construct a SQL query to insert a new customer into the database
      const result = await pool.query(
        'INSERT INTO customers (first_name, last_name, email, street_address, province, country, postal_code) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [first_name, last_name, email, street_address, province, country, postal_code]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating a customer:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a Customer
module.exports.updateCustomer = async (req, res) => {
    // read the body of the request from http request
    const { first_name, last_name, email, street_address, province, country, postal_code } = req.body;
    try {
      // construct a SQL query to update a customer into the database
      const result = await pool.query(
        'UPDATE customers SET first_name = $1, last_name = $2, email = $3, street_address = $4, province = $5, country = $6, postal_code = $7 WHERE customer_id = $8 RETURNING *',
        [first_name, last_name, email, street_address, province, country, postal_code, id]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error updating a customer:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a Customer
module.exports.deleteCustomer = async (req, res) => {
    // read the id of the customer to be deleted from http request
    const id = req.params.id;
    try {
      // construct a SQL query to delete a customer from the database
      const result = await pool.query('DELETE FROM customers WHERE customer_id = $1 RETURNING *', [id]);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error deleting a customer:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete all Customers
module.exports.deleteAllCustomers = async (req, res) => {
    try {
        // construct a SQL query to delete all customers from the database
        const result = await pool.query('DELETE FROM customers');
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error deleting all customers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
