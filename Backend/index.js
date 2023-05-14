const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection enter your username and password of your PostgresSql here
const pool = new Pool({
  user: "your username",
  password: "your password",
  host: "localhost",
  port: 5432,
  database: "bookportal",
});

// Routes
app.get("/books", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM books");
  res.send(rows);
});

app.post("/books", async (req, res) => {
  const { title, author, no_of_pages, published_at } = req.body;
  const { rows } = await pool.query(
    "INSERT INTO books (title, author, no_of_pages, published_at) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, author, no_of_pages, published_at]
  );
  res.send(rows[0]);
});

app.put("/books/:id", async (req, res) => {
  const { title, author, no_of_pages, published_at } = req.body;
  const { rows } = await pool.query(
    "UPDATE books SET title = $1, author = $2, no_of_pages = $3, published_at = $4 WHERE id = $5 RETURNING *",
    [title, author, no_of_pages, published_at, req.params.id]
  );
  res.send(rows[0]);
});

app.delete("/books/:id", async (req, res) => {
  const { rows } = await pool.query(
    "DELETE FROM books WHERE id = $1 RETURNING *",
    [req.params.id]
  );
  res.send(rows[0]);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
