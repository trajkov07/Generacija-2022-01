import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCounter } from "../redux/actions/counterAction";
import { useQuery } from "../useQuery";
import axios from "axios";

export const Dodavac = () => {
  const [value, setValue] = useState(5);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter(value));
  };

  const { response } = useQuery(
    axios.get("https://jsonplaceholder.typicode.com/users/5")
  );

  console.log(response);

  return (
    <div>
      <h1>Dodavac</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button>Increment Async</button>
    </div>
  );
};
