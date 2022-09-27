import logo from "./logo.svg";
import "./App.css";
import { Users } from "./components/Users";
import { Korisnik } from "./components/Korisnik";
import React from "react";
import { Homepage } from "./components/Homepage";

export const UserContext = React.createContext();
export const KorisnikContext = React.createContext();

function App() {
  let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
    },
  ];

  const korisnik = {
    name: "Martin",
    surname: "Trajkov",
    jobPosition: "Developer",
    hobby: "Movies",
    EMBG: "12415432525",
    city: "Radovish",
    street: "8 septemvri",
    number: 300,
  };

  // Preporaclivo e sekogas vo edna komponenta da koristime eden context

  return (
    <KorisnikContext.Provider value={korisnik}>
      <div className="App">
        {/* <Users users={users} username="username" /> */}
        {/* <UserContext.Provider value="Martin">
        <Korisnik />
      </UserContext.Provider> */}

        <Homepage />
      </div>
    </KorisnikContext.Provider>
  );
}

export default App;
