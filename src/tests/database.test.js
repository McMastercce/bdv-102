const sequelize = require('../config/connection');
const  pool = require('../config/db');
const fs = require('fs');
const path = require('path');
const { fail } = require('assert');
const { assert } = require('console');

describe('Database Operations', () => {

  // Test to drop all tables in the online-store database
  test('drop database should succeed', async () => {
      try {
        const moduleRoot = path.dirname(__dirname); 
        const sqlFilePath = path.join(moduleRoot, 'sql', 'drop_tables.sql');
        const sql = fs.readFileSync(sqlFilePath, 'utf8');
        await pool.query(sql);
        console.log('Tables successfully dropped');
      } catch (error) {
        // fail the test
        fail(error);
      }
  })


  test('create database should succeed', async () => {
    try {
      const moduleRoot = path.dirname(__dirname); 
      const sqlFilePath = path.join(moduleRoot, 'sql', 'create_tables.sql');
      const sql = fs.readFileSync(sqlFilePath, 'utf8');
      await pool.query(sql);
      console.log('Tables created successfully');
      console.log('---------------------------');
  
      // Query the database all existing tables
      const queryTables = `
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE';
      `;
      const res = await pool.query(queryTables);
      console.log('List of tables:');
      res.rows.forEach(row => console.log(row.table_name));
    } catch (error) {
      // method to explicitly fail the test
      fail(error);
    }
  })

  test('should susessfully import customer dataset', async () => {
    try {
      const moduleRoot = path.dirname(__dirname); 
      const filePath = path.join(moduleRoot, 'sql', 'import_customers.sql');
      const sql = fs.readFileSync(filePath, 'utf8');
      
      // Split the file content by SQL statement delimiter
      const statements = sql.split(';').map(statement => statement.trim()).filter(statement => statement);
  
      // Execute each statement
      for (const statement of statements) {
        await pool.query(statement);
      }
      console.log('Data imported successfully');
    } catch (error) {
      fail(error); 
    }
  })

  // TODO: Add Test to count the records in the customer table
  test('should be 25 customer in the customer table', async () => {
    fail('Not implemented');
  })

  // TODO: Add Test to delete all records from the customer table
  test('delete all customer dataset should succeed', async () => {
    fail('Not implemented');
  })

});
