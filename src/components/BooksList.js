import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BooksList = ({ books, onDelete }) => {
  return (
    <div className="container">
      <h1 className="my-4">Books List</h1>
      <div className="row">
        {books.length === 0 && (
          <div className="col-12 text-center my-5">
            <div className="alert alert-warning" role="alert">
              No books found.
            </div>
          </div>
        )}
        {books.length > 0 && (
          <>
            {books.map((book) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={book.id}>
                <BookCard book={book} onDelete={onDelete} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BooksList;
