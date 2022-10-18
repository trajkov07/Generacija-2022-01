import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "./redux/actions/counterAction";
import { Dodavac } from "./components/Dodavac";
import { useQuery } from "./useQuery";
import axios from "axios";

// instlacija na axios
// npm install axios

// Deploying react apps on github pages
// https://blog.logrocket.com/8-ways-deploy-react-app-free

function App() {
  const { response } = useQuery(
    axios.get("https://jsonplaceholder.typicode.com/users/1")
  );

  console.log(response);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter(1));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(1));
  };

  return (
    <div className="App">
      <h1>My app</h1>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <br />
      <Dodavac />
    </div>
  );
}

export default App;
