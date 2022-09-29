import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

// Neka imame nekoja forma koja ima ime, prezime i telefonski broj
// i neka na submit na taa forma se proveruvaat slednive validacii
// imeto mora da ni bide najmalku 3 karaktera no najmnogu 20
// prezimeto da ni bide najmalku 5 karakteri no najmnogu isto 20
// telefonskiot broj, zadolzitelno da ni bide samo brojki i da ima tocno 9 brojki

// dokolku nekoja od ovie validacii ne e zadovolena da se prikaze soodveten error
// pod negovoto pole, koga formata kje bide submitirana uspesno
// da se prikaze sledniov tekst Formata bese ispratena i togas da ja snema taa
// forma.
