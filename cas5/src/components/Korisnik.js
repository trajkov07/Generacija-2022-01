import React from "react";
import { UserContext } from "./../App";

export function Korisnik() {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => <h1>Hello {value} from React Context</h1>}
      </UserContext.Consumer>
    </div>
  );
}
