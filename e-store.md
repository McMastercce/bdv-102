

![ERD](./assets/e-store-erd.svg)

This SQL schema defines the structure for a database that supports an e-commerce system, including tables for customers, product types, products, carts, cart items, orders, and order items. Here's a detailed explanation of each table and their relationships:

### Customers Table
- **Purpose:** Stores information about the customers.
- **Columns:**
  - `customer_id`: A unique identifier for each customer.
  - `first_name`: The customer's first name.
  - `last_name`: The customer's last name.
  - `email`: The customer's email address, unique across the table.
  - `street_address`, `province`, `country`, `postal_code`: Address details of the customer.

### Product Types Table
- **Purpose:** Defines different categories or types of products sold in the store.
- **Columns:**
  - `product_type_id`: Unique identifier for each product type.
  - `type_name`: The name of the product type, unique across the table.

### Products Table
- **Purpose:** Contains details of the products.
- **Columns:**
  - `product_id`: Unique identifier for each product.
  - `product_type_id`: A foreign key that links to the `product_types` table, specifying the type of the product.
  - `name`: The name of the product.
  - `description`: A detailed description of the product.
  - `price`: The price of the product.
  - `sku`: A unique stock keeping unit identifier for the product.

### Carts Table
- **Purpose:** Represents the shopping cart for each customer.
- **Columns:**
  - `cart_id`: Unique identifier for each cart.
  - `customer_id`: A foreign key that links to the `customers` table, representing which customer owns the cart. Each customer can have only one cart, enforced by the `UNIQUE` constraint.

### Cart Items Table
- **Purpose:** Lists the items within each shopping cart.
- **Columns:**
  - `cart_item_id`: Unique identifier for each cart item.
  - `cart_id`: A foreign key linking to the `carts` table, indicating which cart the item belongs to.
  - `product_id`: A foreign key linking to the `products` table, indicating which product is in the cart.
  - `quantity`: The number of units of the product in the cart.
  - The `UNIQUE` constraint on `(cart_id, product_id)` ensures that each product appears only once in each cart, i.e., instead of listing the same product multiple times, the quantity is adjusted.

### Orders Table
- **Purpose:** Stores information about customer orders.
- **Columns:**
  - `order_id`: Unique identifier for each order.
  - `customer_id`: A foreign key linking to the `customers` table, indicating who placed the order.
  - `order_date`: The date and time when the order was placed.

### Order Items Table
- **Purpose:** Details of each item in the orders.
- **Columns:**
  - `order_item_id`: Unique identifier for each order item.
  - `order_id`: A foreign key linking to the `orders` table, indicating which order the item belongs to.
  - `product_id`: A foreign key linking to the `products` table, indicating which product was ordered.
  - `quantity`: The number of units of the product ordered.
  - `price`: The price of the product at the time of the order. This is important as product prices can change over time.
  - The `UNIQUE` constraint on `(order_id, product_id)` ensures that each product appears only once in each order, similar to the cart items logic.

**Bridging Tables:**
- `cart_items` and `order_items` are bridging (or junction) tables that connect products to carts and orders respectively, allowing for a many-to-many relationship. They help to manage the multiple entities (products) that can be part of a single entity (cart or order).

In summary, this schema efficiently organizes the data for an e-commerce platform, linking customers to their carts and orders, products to their types, and detailing the items within carts and orders.