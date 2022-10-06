import { useOutletContext, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Book = () => {
  // ova id e imeto na custom parametarot koj go stavivme vo rutata za /books/:id vo app.js
  const { id } = useParams();
  const obj = useOutletContext();
  console.log(obj);

  return (
    <>
      <h1>
        Book {id} - {obj.name}
      </h1>
      {/* <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New Book</Link> */}
    </>
  );
};
