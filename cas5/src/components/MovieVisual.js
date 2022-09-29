import React from "react";
import { MovieContext } from "../App";

export const MovieVisual = () => {
  const movie = React.useContext(MovieContext);

  return (
    <div>
      <h3>
        <a href={movie.link}>Link to the movie</a>
      </h3>
      <div>
        {movie.pictures.map((image, i) => {
          return (
            <img src={image} key={i} style={{ width: 300, height: 300 }} />
          );
        })}
      </div>
    </div>
  );
};
