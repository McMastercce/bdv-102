const {Product, ProductType} = require('../../models/Product');

// The orm ProductController uses an ORM to handle requests to the database,
// from javascript to implements the following operations:
//
// 1. Fetch a Product by ID
// 2. Fetch all Products
// 3. Create a Product
// 4. Update a Product
// 5. Delete a Product
// 6. Delete all Products 

// fetch a Product by id
module.exports.getSingleProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
    
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error retrieving product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// fetch all Products
module.exports.getAllProducts = async (req, res) => {
    try {
        const Products = await Product.findAll();
        res.status(200).json(Products);
    } catch (error) {
        console.error('Error fetching Products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Create a Product
module.exports.createProduct = async (req, res) => {
    try {
        b = req.body;
        console.log(b);
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    } catch (error) {
        console.error('Error creating Product:', error);
        return res.status(400).json({ error: error.message });
    }
}

// Update a Product
module.exports.updateProduct = async (req, res) => {
    try {
        // find Product by primary key
        id = req.params.id;
        const product = await Product.findByPk(id);
        if (product) {
            // if Product found, update Product with new data
            await Product.update(req.body, {
                where: { product_id: id } // Specify the condition here
            });
            // To get updated product data, you might need to re-fetch or directly return the updated data
            const updatedProduct = await Product.findByPk(id);
            // return 200 OK with updated Product data
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(`Error updating Product with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Delete a Product
module.exports.deleteProduct = async (req, res) => {
    try {
        // find Product by primary key
        id = req.params.id;
        const Product = await Product.findByPk(id);
        if (Product) {
            // if Product found delete Product
            await Product.destroy();
            // return 200 OK with success message
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(`Error deleting Product with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Delete all Products
module.exports.deleteAllProducts = async (req, res) => {
    try {
        // fetch all Products
        const Products = await Product.findAll();
        // if Products found delete all Products
        if (Products) {
            await Product.destroy({
                where: {},
                truncate: true
            });
            // return 200 OK with success message
            res.status(200).json({ message: 'All Products deleted successfully' });
        } else {
            res.status(404).json({ error: 'Products not found' });
        }
    } catch (error) {
        console.error(`Error deleting all Products:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
}