import PropTypes from "prop-types";
export const Korisnik = (props) => {
  console.log(props);
  return (
    <div>
      {props.prikaziKorisnik ? ( // nacin na prikazuvanje na nekoj html vrz baza na flag
        <div>
          <p>{props.korisnik1.ime}</p>
          <p>{props.korisnik1.adresa}</p>
          <p>{props.korisnik1.godini}</p>
        </div>
      ) : (
        <div>
          <p>{props.korisnik2.ime}</p>
          <p>{props.korisnik2.adresa}</p>
          <p>{props.korisnik2.godini}</p>
        </div>
      )}
    </div>
  );
};

Korisnik.propTypes = {
  korisnik1: PropTypes.object.isRequired,
  korisnik2: PropTypes.object,
  prikaziKorisnik: PropTypes.bool.isRequired,
};

Korisnik.defaultProps = {
  prikaziKorisnik: true,
  korisnik1: { ime: "ime", adresa: "adresa", godini: "18" },
};

// Da napraime edna komponenta student kaj sto vo tabela kje imame,
// ime / prezime / index listata za popolnuvanje na tabelata da ja pratime
// od app.js kako property a potoa da pratime uste edno property , koe kje bide
// nekoj obicen tekst, neka se vika semestar, i toa da se prikazuva na ekranot vo nekoj <h1> element posle tabelata na studentite

// Da stavime PropTypes na listata od studenti deka toa kje bide lista od objekti i kje bide required a za semestarot da stavime samo
// deka kje bide obicen string
// no dokolku semestarot ne se prakja od app.js da stavime defaultno property koe kje ispisuva zimski
