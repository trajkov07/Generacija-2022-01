import { MovieContext } from "../App";
import React from "react";
export const MovieInformation = () => {
  const movie = React.useContext(MovieContext);

  return (
    <div>
      <h4>Name: {movie.name}</h4>
      <h4>Rating: {movie.rating}</h4>
      <h4>Zanr: {movie.zanr}</h4>
      <h4>Plot: {movie.plot}</h4>
      <h4>Release Date: {movie.releaseDate}</h4>
    </div>
  );
};
