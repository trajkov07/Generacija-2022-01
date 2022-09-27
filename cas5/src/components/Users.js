import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const Users = (props) => {
  const [usersToShow, setUsersToShow] = useState(props.users);
  const [vrednost, setVrednost] = useState("");

  let onChange = (event) => {
    let value = event.target.value;
    setVrednost(value);
  };

  useEffect(() => {
    if (vrednost) {
      console.log(vrednost);
      const filteredUsers = usersToShow.filter((user) => {
        return user.name.includes(vrednost);
      });
      console.log(filteredUsers);
      setUsersToShow(filteredUsers);
    }
  }, [vrednost]);

  //   console.log(props);
  return (
    <div>
      <div>
        <h1>Filter here</h1>
        <input type="text" onChange={onChange} />
      </div>
      <br />
      <br />
      <br />
      <div>
        {usersToShow.map((user, i) => {
          return (
            <div
              key={i}
              style={{ float: "left", width: 300, marginBottom: 50 }}
            >
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Props mozat da bidat razlicni tipovi (nizi, objekti, funkcii, stringovi, broevi) itn...
Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  username: PropTypes.string,
};
