import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export const BookLayout = () => {
  //   const [number, setNumber] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  console.log(searchParams);
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      {
        // so `` mozeme da konkatanirame stringovi so nekoi variabli sto gi imame vo javascript
      }
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <Outlet context={{ name: "Harry Potter" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
};
