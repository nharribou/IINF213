-- Create a database for customer information
CREATE DATABASE IF NOT EXISTS customer_db;

-- Use the newly created database
USE customer_db;

-- Create a table for storing customer information
CREATE TABLE IF NOT EXISTS clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255),
  email VARCHAR(255),
  telephone VARCHAR(15)
);

-- Insert 10 random users into the clients table
INSERT INTO clients (nom, prenom, email, telephone)
VALUES
  ('Doe', 'John', 'john@example.com', '06544554'),
  ('Smith', 'Jane', 'jane@example.com', '06543210'),
  ('Johnson', 'Alice', 'alice@example.com', '06549999'),
  ('Brown', 'Bob', 'bob@example.com', '06548888'),
  ('Davis', 'Eva', 'eva@example.com', '06547777'),
  ('Miller', 'Chris', 'chris@example.com', '06546666'),
  ('Wilson', 'David', 'david@example.com', '06545555'),
  ('Moore', 'Emily', 'emily@example.com', '06544444'),
  ('Jones', 'Frank', 'frank@example.com', '06543333'),
  ('Lee', 'Grace', 'grace@example.com', '06542222');
