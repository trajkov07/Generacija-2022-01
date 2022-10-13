import logo from "./logo.svg";
import "./App.css";
import { Comments } from "./components/Comments";
import { useState, useEffect } from "react";
import { API_URL } from "./Konstanti/constants";
import { Posts } from "./components/Posts";
import { Link, Route, Routes } from "react-router-dom";
import { Users } from "./components/Users";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}posts`)
      .then((res) => res.json())
      .then((results) => setPosts(results));
  }, []);

  return (
    <div className="App">
      {/* <Comments /> */}
      <ul>
        <li>
          <Link
            to="/comments"
            state={{ name: "something", comment: "commentContent" }}
          >
            Comments
          </Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Posts listOfPosts={posts} />} />
        <Route path="/users" element={<Users />} />
      </Routes>

      {/* <Posts listOfPosts={posts} /> */}
    </div>
  );
}

export default App;

// Da se kreira edna posebna komponenta za Users i vnatre da se prikazuvaat users
//od istovo api sto go imame ovde
// https://jsonplaceholder.typicode.com/users i za userive
//da se prikazuvaat imeto i prezimeto, dodeka cekame da gi dobieme
// userive da se prikazuva nekoj Loading element

// Pokraj imeto i prezimeto neka pecatime nekoe kopce koe kje
//se vika Details i pri klik na toa kopce, na dnoto
// da se prikazat poveke informacii za kliknatiot user neka se
//prikazi plus username, email i phone
