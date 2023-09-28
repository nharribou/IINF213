const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // Import the mysql2 module
const app = express();

// Create a MySQL connection pool using mysql2
const pool = mysql.createPool({
    host: 'najib-database', // Use the IP address of your MySQL container
    port: 3306,
    user: 'root',
    password: 'root_password',
    database: 'customer_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(cors());

// Start the Express server
const port = 5000;
app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});

// Récupérer la liste des clients
app.get('/clients', (req, res) => {
    const sql = 'SELECT * FROM clients';
    // Use the connection pool to handle database queries
    pool.query(sql, (err, result) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).send('Database error');
            return;
        }
        res.json(result);
    });
});
