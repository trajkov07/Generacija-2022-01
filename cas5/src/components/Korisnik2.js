import { Location } from "./Location";
import React from "react";
import { KorisnikContext } from "../App";

export const Korisnik2 = () => {
  // najnov i najkoristen nacin na koristenje context vo moderno vreme
  const korisnik = React.useContext(KorisnikContext);
  return (
    <div>
      <p>Name: {korisnik.name}</p>
      <p>Surname: {korisnik.surname}</p>
      <p>Job position: {korisnik.jobPosition}</p>
      <p>Hobby: {korisnik.hobby}</p>
      <p>EMBG: {korisnik.EMBG}</p>
      <Location />
    </div>
  );
};
