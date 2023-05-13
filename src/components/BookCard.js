import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book, onDelete }) => {
  const { id, title, author, no_of_pages } = book;

  return (
    <div className="card book-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">By: {author}</p>
        <p className="card-text">Number of Pages: {no_of_pages}</p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <Link className="btn btn-primary" to={`/edit/${id}`}>
            Edit
          </Link>
          <button className="btn btn-danger" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    no_of_pages: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookCard;
