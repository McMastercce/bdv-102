# Module 3: Introduction to SQL
This module will introduce you to the basics of SQL and how to use it to query data from a database. The database used in this module is a sample database of a coffeeshop from [https://github.com/mochen862/full-sql-database-course](https://github.com/mochen862/full-sql-database-course)

## Requirements
The requirements for this module is access to a Neon account, ad outlined in the course documentation.

## Learning Activities
- Sign up to Neon
- Create database coffeeshop
- Navigate to 'SQL editor'

### 1. Create Database
- Copy the context of file [create_database.sql](./sql/create_database.sql) and paste in the 'SQL editor'

- Review the SQL syntax for creating a tables and defining types for the attributes.

- Select Run to execute the SQL query by the NEon DBMS.

- Upon successful execution, navigate and inspect the created tables from the dashboard.


### 2. Load Coffeeshop Dataset

- Copy the context of file [create_database.sql](./sql/create_database.sql) and paste/run in the 'SQL editor.

Note a sample of what a SQL INSERT INTO statement might look like for the coffee database:

INSERT INTO employees VALUES (782284, 'Vilhelmina', 'Rayman', 'vrayman2@jigsy.com', '2015/08/17', 'F', 57855, 2);


## Assigment
---
Solve the following SQL queries:

1. **Select all employees' details:**
  ```sql
  SELECT * FROM employees;
  ```

2. **Select first name and last name of all female employees:**
  ```sql
  SELECT first_name, last_name FROM employees WHERE gender = 'F';
  ```

3. **Select all shops' details in city 1:**
  ```sql
  SELECT * FROM shops WHERE city_id = 1;
  ```

4. **Select the average salary of employees in each coffeeshop:**
  ```sql
  SELECT coffeeshop_id, AVG(salary) AS average_salary FROM employees GROUP BY coffeeshop_id;
  ```

5. **Select all supplier names and coffee types for coffeeshop 1:**
  ```sql
  SELECT supplier_name, coffee_type FROM suppliers WHERE coffeeshop_id = 1;
  ```

6. **Select employees who were hired after a specific date (e.g., '2020-01-01'):**
  ```sql
  SELECT * FROM employees WHERE hire_date > '2020-01-01';
  ```

7. **Select coffeeshop names along with their city and country:**
  ```sql
  SELECT s.coffeeshop_name, l.city, l.country
  FROM shops s
  JOIN locations l ON s.city_id = l.city_id;
  ```

8. **Select all employees with a salary above 50000:**
  ```sql
  SELECT * FROM employees WHERE salary > 50000;
  ```

9. **Select coffeeshops that have more than one employee:**
  ```sql
  SELECT s.coffeeshop_name
  FROM shops s
  JOIN employees e ON s.coffeeshop_id = e.coffeeshop_id
  GROUP BY s.coffeeshop_name
  HAVING COUNT(e.employee_id) > 1;
  ```

10. **Select all cities that have a coffeeshop and list the number of shops in each city:**
   ```sql
   SELECT l.city, COUNT(s.coffeeshop_id) AS number_of_shops
   FROM locations l
   JOIN shops s ON l.city_id = s.city_id
   GROUP BY l.city;
   ```

11. **Update the salary of a specific employee (employee_id = 755091) to a 60000:**
   ```sql
   UPDATE employees
   SET salary = 60000
   WHERE employee_id = 755091;
   ```

12. **Increase the salary by 10% for all employees working at coffeeshop (ecoffeeshop_id = 2):**
   ```sql
   UPDATE employees
   SET salary = salary * 1.10
   WHERE coffeeshop_id = 2;
   ```

13. **Change the coffeeshop for employee 3 to coffeeshop 1:**
   ```sql
   UPDATE employees
   SET coffeeshop_id = 1
   WHERE employee_id = 755091;
   ```

14. **Update the email address of a specific employee (e.g., employee_id = 225709):**
   ```sql
   UPDATE employees
   SET email = 'eleen.tarpey@devhub.com'
   WHERE employee_id = 225709;
   ```

16. **Update the coffeeshop name for a specific coffeeshop (e.g., coffeeshop_id = 3):**
   ```sql
   UPDATE shops
   SET coffeeshop_name = 'New Coffee Palace'
   WHERE coffeeshop_id = 3;
   ```

17. **Remove all employees who have a salary above 80000:**
   ```sql
   DELETE FROM employees
   WHERE salary > 80000;
   ```
