import { useParams } from "react-router-dom";

export const Book = () => {
  // ova id e imeto na custom parametarot koj go stavivme vo rutata za /books/:id vo app.js
  const { id } = useParams();

  return <h1>Book {id} </h1>;
};
