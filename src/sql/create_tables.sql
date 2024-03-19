-- Dropping tables if they exist (in reverse order due to FK constraints)
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS cart_items CASCADE;
DROP TABLE IF EXISTS carts CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS product_types CASCADE;
DROP TABLE IF EXISTS customers CASCADE; -- Renamed from users

-- Create customers table
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    street_address VARCHAR(100),
    province VARCHAR(50),
    country VARCHAR(50),
    postal_code VARCHAR(20)
);

CREATE TABLE product_types (
    product_type_id SERIAL PRIMARY KEY,
    type_name VARCHAR(50) UNIQUE
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_type_id INTEGER REFERENCES product_types(product_type_id),
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    sku VARCHAR(255) UNIQUE
);

CREATE TABLE carts (
    cart_id SERIAL PRIMARY KEY,
    customer_id INTEGER UNIQUE REFERENCES customers(customer_id) -- Updated reference
);

CREATE TABLE cart_items (
    cart_item_id SERIAL PRIMARY KEY,
    cart_id INTEGER REFERENCES carts(cart_id),
    product_id INTEGER REFERENCES products(product_id),
    quantity INTEGER,
    UNIQUE(cart_id, product_id)
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(customer_id), -- Updated reference
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id),
    product_id INTEGER REFERENCES products(product_id),
    quantity INTEGER,
    price DECIMAL(10, 2), -- Price at the time of ordering
    UNIQUE(order_id, product_id)
);
