import { useEffect, useState } from "react";
import { API_URL } from "../Konstanti/constants";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch(API_URL + "users")
      .then((result) => result.json())
      .then((jsonValue) => setUsers(jsonValue));
  }, []);

  //   const handleOnClick = (id) => {
  //     console.log(users);
  //     let individualUser = users.find((user) => id === user.id);
  //     console.log(individualUser);
  //     setUser(individualUser);
  //   };

  const handleOnClick = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <div>
      <h1>Users</h1>

      {users.length > 0 ? (
        users.map((user) => {
          return (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <button onClick={() => handleOnClick(user)}>Details</button>
            </div>
          );
        })
      ) : (
        <h2>Loading ....</h2>
      )}

      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};
