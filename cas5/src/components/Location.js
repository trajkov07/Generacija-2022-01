import React from "react";
import { KorisnikContext } from "../App";

export const Location = () => {
  // ova e vsusnost nasiot Context.Consumer
  const location = React.useContext(KorisnikContext);

  return (
    <div>
      <h1>Location</h1>
      <p>City: {location.city}</p>
      <p>Street: {location.street}</p>
      <p>Number: {location.number}</p>
    </div>
  );
};
