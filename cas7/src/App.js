import logo from "./logo.svg";
import "./App.css";
import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NotFound } from "./components/NotFound";
import { BookLayout } from "./components/BookLayout";
// npm i react-router-dom
function App() {
  // Drug nacin na definiranje na rutite
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);

  return (
    <>
      {/* Bi mozele da imame poveke ruti so ist tekst vo path kje se pokazat
        site onie sto gi imame
      <Routes>
        <Route path="/books" element={<h1>Some extra content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            {/* replace go zamenuva rutata vo istorijata na browserot
            <Link to="/" replace>Home</Link> 
            */}
            {/* <Link to="/" reloadDocument>
              Home
            </Link> */}
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "blue" };
              }}
              to="/"
              end
            >
              Home
            </NavLink>
            {
              // so a tag se refreshira stranava i toa ne e preporaclivo
            }
            {/* <a href="/">Home</a> */}
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
        {
          // path znaci delot sto go imame posle domain imeto na sajtot
          // element e delot koj sakame da go pokazeme
        }
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* <Route path="books" element={<BookList />} /> */}
        {/* <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// da dodademe druga komponenta koja kje bide NewMovie i kje se renderira na ruta /movies/new
// i vnatre vo NewMovie da imame nekoja forma so 3 inputi, da receme ime na filmot, zanr i rejting
// da gi cuvame vo nekoj stejt i pri submit na formata vo kozola samo da gi ispecatime vrednostite
// da napravime i edna notFound komponentata no vo nea da ima vo <h1>404 i da bide crven
// a pod toj h1 neka ima nekoj obicen div vo koj kje ispecatime so sina boja
// The resource you are looking for is missing

// Neka imame nekoja komponenta Movie vo koja kje imate nekoja lista na filmovi i preku custom
// parametar so id-to na filmot da probame preku listata da go najdime filmot i da go prikazime
// bas toj film
