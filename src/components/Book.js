import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book, onDelete }) => {
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.no_of_pages}</td>
      <td>{book.published_at}</td>
      <td>
        <Link to={`/edit/${book.id}`} className="btn btn-primary mr-2">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Book;
