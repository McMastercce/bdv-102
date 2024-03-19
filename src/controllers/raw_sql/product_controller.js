const pool = require('../../config/db');

// The raw_sql ProductController shows the usage of raw_sql to connect to the database,
// from javascript to implements the following operations:
//
// 1. Fetch a product by ID
// 2. Fetch all products
// 3. Create a product
// 4. Update a product
// 5. Delete a product
// 6. Delete all products 

// fetch a product by id using raw SQL
module.exports.getSingleProductById = async (req, res) => {
  try {
    id = req.params.id
    const { rows } = await pool.query(
      `SELECT p.product_id, p.name, p.description, p.price, p.sku, p.product_type_id, pt.type_name
       FROM products p
       JOIN product_types pt ON p.product_type_id = pt.product_type_id
       WHERE p.product_id = $1`,
      [id]
    );
    if (rows.length) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// fetch all products
module.exports.getAllProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a product using raw SQL
module.exports.createProduct = async (req, res) => {
  const { product_id ,product_type_id, name, description, price, sku } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO products (product_id, product_type_id, name, description, price, sku) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [product_id, product_type_id, name, description, price, sku]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a product
module.exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { product_type_id, name, description, price, sku } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE products SET product_type_id = $1, name = $2, description = $3, price = $4, sku = $5 WHERE product_id = $6 RETURNING *',
      [product_type_id, name, description, price, sku, id]
    );
    if (rows.length) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a product
module.exports.deleteProduct = async (req, res) => {
    // read the id of the product to be deleted from http request
    const id = req.params.id;
    try {
      // construct a SQL query to delete a product from the database
      const result = await pool.query('DELETE FROM products WHERE product_id = $1 RETURNING *', [id]);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error deleting a product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete all products
module.exports.deleteAllProducts = async (req, res) => {
    try {
        // construct a SQL query to delete all products from the database
        const result = await pool.query('DELETE FROM products');
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error deleting all products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
