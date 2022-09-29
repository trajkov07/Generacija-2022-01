import logo from "./logo.svg";
import "./App.css";
import { Users } from "./components/Users";
import { Korisnik } from "./components/Korisnik";
import React from "react";
import { Homepage } from "./components/Homepage";
import { Movie } from "./components/Movie";

export const UserContext = React.createContext();
export const KorisnikContext = React.createContext();
export const MovieContext = React.createContext();

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

  const movie = {
    name: "Interstellar",
    rating: 9,
    zanr: "science-fiction",
    plot: "A group of explorers make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    releaseDate: "08-08-2014",
    link: "https://www.youtube.com/watch?v=zSWdZVtXT7E&ab_channel=WarnerBros.UK%26Ireland",
    pictures: [
      "https://images.theconversation.com/files/64127/original/2mdvqkw8-1415620078.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
      "https://images.squarespace-cdn.com/content/v1/5a78ab8490badee028bef0e9/1568935524292-TPSLMXHD9HE6PKN02YOG/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/Interstellar.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52GJp0PGi8TXYbC-9ZB2IouAAtEW_gk4ceY2v54iFqjVKQRFMpxQQznTQhpN3EeZrJH8&usqp=CAU",
    ],
  };

  // Preporaclivo e sekogas vo edna komponenta da koristime eden context

  return (
    // <KorisnikContext.Provider value={korisnik}>
    <div className="App">
      {/* <Users users={users} username="username" /> */}
      {/* <UserContext.Provider value="Martin">
        <Korisnik />
      </UserContext.Provider> */}
      <MovieContext.Provider value={movie}>
        <Movie />
      </MovieContext.Provider>
      {/* <Homepage /> */}
    </div>
    // </KorisnikContext.Provider>
  );
}

export default App;

// Neka imame nekoj objekt movie, koj vnatre kje ima nekoja lista od sliki(barem2), i neka za filmot
// rating, zanr, plot, releaseDate i link do negoviot trailer.
// Da napraime edna komponenta Movie vo koja samo kje prikazeme dve drugi komponenti, ednata neka bide komponenta
// za informaciite za filmot i vnatre da gi prikazime site informacii za filmot, osven slikite i linkot
// slikite i linkot da gi prikazeme preku vtorata komponenta koja kje ja kreirame.
// Uslovot e movie objektot da go definirame vo app.js i da go pratime preku context
// a vo dvete komponenti da go zememe toj objekt i da gi prikazime informaciite

// cekor1: da se kreira movie objektot vo app.js so potrebnite informacii (kako nasiot korisnik vo primerot)
// cekor2: da se kreira movie komponentata vo koja kje se prikazuvaat drugite 2 komponenti
// cekor3: da se kreira contextot i vo value da se prati movie objektot i toj context da ja obvitkuva Movie komponentata
// cekor4: da se kreiraat drugite dve komponenti
// cekor5: da go zememe objektot od contextot i da gi prikazime informaciite preku toj objekt
