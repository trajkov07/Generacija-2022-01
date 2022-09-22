import logo from "./logo.svg";
import "./App.css";
import Sport from "./components/Sport";
import SportForNikola from "./components/SportForNikola";
import { StudentClass } from "./components/StudentClass";
import { Car } from "./components/Car";
import { Korisnik } from "./components/Korisnik";

function App() {
  let sportoviILuge = [
    { name: "Filip", sport: "Tenis" }, // edinicen element
    { name: "Martin", sport: "Ragbi" }, // edinicen element
    { name: "Bobi", sport: "Sah" }, // edinicen element
    { name: "Filip1", sport: "Tenis1" },
    { name: "Martin1", sport: "Ragbi1" },
    { name: "Bobi1", sport: "Sah1" },
  ];
  console.log(sportoviILuge);
  let name = "Martin";

  var student = {
    name: "Martin",
    lastName: "Trajkov",
    index: 155025,
  };

  let cars = [
    { brand: "Ford", model: "Fiesta", godina: 2008 },
    { brand: "Opel", model: "Astra", godina: 2015 },
    { brand: "Tesla", model: "Model s", godina: 2022 },
  ];

  let korisnik1 = {
    ime: "Liljana",
    godini: 20,
    adresa: "Kej 8 septemvri",
  };

  let korisnik2 = {
    ime: "Laura",
    godini: 30,
    adresa: "Partizanska 7",
  };
  return (
    <div className="App">
      {/* <Sport name={name} sport="Tenis" lista={sportoviILuge} /> */}
      {/* <SportForNikola ime={name} sport="Ragbi" /> */}
      {/* {sportoviILuge.map((element) => {
        return <Sport name={element.name} sport={element.sport} />;
      })} */}
      {/* <StudentClass student={student} /> */}
      <Car vozila={cars} />
      {/* <Korisnik korisnik2={korisnik2} /> */}
    </div>
  );
}

export default App;

// Da napraime edna komponenta student kaj sto vo tabela kje imame,
// ime / prezime / index listata za popolnuvanje na tabelata da ja pratime
// od app.js kako property a potoa da pratime uste edno property ,
// koe kje bide nekoj obicen tekst, neka se vika semestar,
// i toa da se prikazuva na ekranot vo nekoj <h1> element
// posle tabelata na studentite

// Da stavime PropTypes na listata od studenti deka toa kje bide
// lista od objekti i kje bide required a za semestarot da stavime samo
// deka kje bide obicen string no dokolku semestarot ne se
// prakja od app.js da stavime defaultno property koe kje ispisuva zimski
