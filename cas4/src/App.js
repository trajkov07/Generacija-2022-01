import logo from "./logo.svg";
import "./App.css";
import { ShowName } from "./components/ShowName";
import { Dates } from "./components/Dates";
import { useState, useEffect } from "react";
import { CounterClass } from "./components/CounterClass";
import { Movie } from "./components/Movie";

function App() {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");
  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username]);
  // useEffect se povikuva na prvicnoto istrcutuvanje na
  // UI i sekogas koga se menuva stejtot
  // prazen array znaci useEffect kje se povika samo ednas na pocetokot
  // Vo ovoj array gi stavame onie stejtovi so cie menuvanje
  // sakame da se povika useEffectot
  return (
    <div className="App">
      {/* <ShowName /> */}
      {/* <Dates /> */}
      {/* <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <br />
      <CounterClass /> */}
      <Movie />
    </div>
  );
}

export default App;

// Komponenta so ime brojac
// vnatre neka ima nekoe kopce koe sto koga kje se klikne
// kje zgolemuva za eden nekoja vrednost
// taa vrednost kje se cuva so useState i kje se
// prikazuva vednas posle kopceto

// Domasna
// neka ima edna do druga dve sliki i pod niv neka ima brojaci koj kje pocnuvaat od 0
// vo stejtot da imame dve promenlivi koj sto kje bidat vsusnost brojacite za slikite,
// koga kje klikneme
// na nekoja od slikite da se zgolemi brojacot sto e odgovoren za taa slika
// no isto taka preku useEffect da napravime sekogas koga kje se klikne vtorata
//  slika togas vo kozola
// da napiseme nekoj tekst ---> jas uspesno ja zavrsiv vezbata
