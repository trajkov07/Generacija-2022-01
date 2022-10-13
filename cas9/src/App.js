import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  depositBalance,
  withdrawBalance,
} from "./redux/actions/balanceActions";
import { Salary } from "./components/Salary";

// Redux Thunk
// npm install redux-thunk --save

function App() {
  const [value, setValue] = useState(0);
  const balance = useSelector((state) => state.balanceReducer.balance);
  const creditRating = useSelector((state) => state.creditReducer.creditRating);
  console.log(balance);

  const dispatch = useDispatch();

  let handleDeposit = () => {
    dispatch(depositBalance(value));
  };

  let handleWithdraw = () => {
    dispatch(withdrawBalance(value));
  };

  return (
    <div className="App">
      <h1>My Bank</h1>
      <h1>Balance: {balance}</h1>
      <h1>Credit Rating: {creditRating}</h1>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
      </div>
      <br />
      <Salary />
    </div>
  );
}

export default App;
