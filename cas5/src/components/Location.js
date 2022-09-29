import React from "react";
import { KorisnikContext } from "../App";

export const Location = () => {
  // ova e vsusnost nasiot Context.Consumer
  let location = React.useContext(KorisnikContext);

  // const location = React.useContext(KorisnikContext);

  // let koristime koga nasata variabla bi mozela da pretrpi promeni
  // const koristime koga znaeme deka vrednosta na variablata nema nikogas da se smeni

  return (
    <div>
      <h1>Location</h1>
      <p>City: {location.city}</p>
      <p>Street: {location.street}</p>
      <p>Number: {location.number}</p>
    </div>
  );
};
