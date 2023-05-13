import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";
import BooksList from "./components/BooksList";
import BookForm from "./components/BookForm";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBooks(response.data);
  };

  const handleSubmit = async (book) => {
    if (book.id) {
      await axios.put(`http://localhost:5000/books/${book.id}`, book);
    } else {
      await axios.post("http://localhost:5000/books", book);
    }
    fetchBooks();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      await axios.delete(`http://localhost:5000/books/${id}`);
      fetchBooks();
    }
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Welcome to Book Store Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark font-weight-bold" to="/add">
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            exact
            element={<BooksList books={books} onDelete={handleDelete} />}
          />

          <Route
            path="/add"
            exact
            element={<BookForm onSubmit={handleSubmit} initialData={{}} />}
          />
          <Route
            path="/edit/:id"
            exact
            element={<EditBookForm onSubmit={handleSubmit} books={books} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const EditBookForm = ({ onSubmit, books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <BookForm onSubmit={onSubmit} initialData={book} />
    </div>
  );
};

export default App;
