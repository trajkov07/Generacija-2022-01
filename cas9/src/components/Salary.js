import { useDispatch, useSelector } from "react-redux";
import {
  depositBalance,
  depositBalanceAsync,
} from "../redux/actions/balanceActions";

export const Salary = () => {
  const monthlySallary = 2000;
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <h1>Add Monthly Salary</h1>
      <button onClick={() => dispatch(depositBalance(monthlySallary))}>
        Add my monthly sallary
      </button> */}
      <h1>Dupliraj go kontoto</h1>
      <button onClick={() => dispatch(depositBalance(balance))}>
        Dupliraj
      </button>
      <br />
      <button onClick={() => dispatch(depositBalanceAsync(monthlySallary))}>
        Add my monthlySallary after some time
      </button>

      {/* <button onClick={() => dispatch({
    type: "DEPOSIT",
    payload: balance,
  })}> */}
    </div>
  );
};
