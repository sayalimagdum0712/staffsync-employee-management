const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

db.query(`
CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    department VARCHAR(255),
    designation VARCHAR(255),
    salary DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`, (err) => {
    if (err) console.log(err);
    else console.log('Employees table ready!');
});

app.get('/health', (req, res) => {
    res.json({ status: 'Backend is running!' });
});

app.get('/api/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.post('/api/employees', (req, res) => {
    const { name, email, department, designation, salary } = req.body;

    db.query(
        'INSERT INTO employees (name,email,department,designation,salary) VALUES (?,?,?,?,?)',
        [name, email, department, designation, salary],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({
                message: 'Employee created',
                id: result.insertId
            });
        }
    );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
