# Neon

### 1. Signing Up for Neon

1. **Visit the Neon Website:**
   Navigate to the Neon homepage at [https://www.neon.tech/](https://www.neon.tech/).

2. **Create an Account:**
   Click on the "Sign Up" or "Get Started" button. You can sign up using your email address or through third-party authentication services like GitHub or Gmail. Select your preferred method and follow the prompts to create your account. If using GitHub or Gmail, you will be redirected to authorize Neon to access your account.

### 2. Creating a Project in Neon

1. **Log In to Your Account:**
   After your account is created and verified, log in to your Neon dashboard.

2. **Create a New Project:**
   In the dashboard, find and click the option to create a new project, often labeled as "New Project" or "+ Project".

3. **Name Your Project:**
   Enter a name for your project when prompted to help identify it within Neon.

### 3. Setting Up a Database

1. **Access Your Project:**
   Once the project is created, click on it to open the project dashboard.

2. **Create a New Database:**
   Look for an option like "New Database", "+ Database", or "Create Database", and click on it.

3. **Name Your Database:**
   Provide a name for your database when prompted; this name will be used in your Node.js application to connect to the database.

### 4. Obtaining Environment Credentials

1. **Find Database Details:**
   In the project dashboard, go to the database section and find the option to view its details, often under a "Settings" or "Details" tab.

2. **Copy Credentials:**
   In the details section, locate the connection credentials which include the Hostname (PGHOST), Database name (PGDATABASE), User (PGUSER), Password (PGPASSWORD), and SSL requirement (DATABASE_USE_SSL).

3. **Create `.env` File:**
   In your Node.js project directory, create a file named `.env`. Enter the obtained credentials in the following format:
   ```
   PGHOST='your-hostname'
   PGUSER='your-username'
   PGPASSWORD='your-password'
   PGDATABASE='your-database-name'
   PGPORT='your-port'  // If needed
   DATABASE_USE_SSL=true  // Or false, based on your setup
   ```

### 5. Connecting to Neon from Node.js

1. **Install PostgreSQL Client and `dotenv`:**
   Install `pg` for PostgreSQL connectivity and `dotenv` for loading environment variables from your `.env` file using npm:
   ```
   npm install pg dotenv
   ```

2. **Use Credentials in Your Application:**
   In your Node.js code, use the `dotenv` package to load the environment variables from the `.env` file, and then use these variables to configure the database connection:
   ```javascript
   require('dotenv').config();
   const { Pool } = require('pg');

   const pool = new Pool({
     connectionString: process.env.DATABASE_URL || null,
     ssl: process.env.DATABASE_USE_SSL === 'true' ? { rejectUnauthorized: false } : false
   });

   // You can now use `pool` to query your Neon database
   ```