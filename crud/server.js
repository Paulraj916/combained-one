const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'todo_app', 
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// Routes
app.get('/api/todos', (req, res) => {
  const sql = 'SELECT * FROM todos';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new todo
app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  const sql = 'INSERT INTO todos (task, status) VALUES (?, ?)';
  db.query(sql, [task, 'pending'], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, task, status: 'pending' });
  });
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;
  const sql = 'UPDATE todos SET task = ?, status = ? WHERE id = ?';
  db.query(sql, [task, status, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo updated successfully' });
  });
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM todos WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo deleted successfully' });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
