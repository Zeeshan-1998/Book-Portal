import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [author, setAuthor] = useState(initialData.author || "");
  const [no_of_pages, setNoOfPages] = useState(initialData.no_of_pages || "");
  const [published_at, setPublishedAt] = useState(
    initialData.published_at ? new Date(initialData.published_at) : new Date()
  );
  const navigate = useNavigate();

  const handleInsert = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      author,
      no_of_pages,
      published_at: published_at.toISOString().split("T")[0],
    });

    // Show success message
    alert("Book added successfully!");

    // Reset form fields
    setTitle("");
    setAuthor("");
    setNoOfPages("");
    setPublishedAt(new Date());

    // Navigate to home page
    navigate("/");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onSubmit({
      id: initialData.id,
      title,
      author,
      no_of_pages,
      published_at: published_at.toISOString().split("T")[0],
    });

    // Show success message
    alert("Book updated successfully!");

    // Navigate to home page
    navigate("/");
  };

  const handleSubmit = initialData.id ? handleUpdate : handleInsert;

  return (
    <div className="container">
      <h1 className="mb-4">{initialData.id ? "Edit Book" : "Add Book"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="no_of_pages" className="form-label">
            Number of Pages
          </label>
          <input
            type="number"
            className="form-control"
            id="no_of_pages"
            placeholder="Enter number of pages"
            value={no_of_pages}
            onChange={(e) => setNoOfPages(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="published_at" className="form-label">
            Published Date
          </label>
          <div>
            <DatePicker
              selected={published_at}
              onChange={(date) => setPublishedAt(date)}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              id="published_at"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {initialData.id ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
