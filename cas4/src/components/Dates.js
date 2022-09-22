import { useState } from "react";
import { ShowDate } from "./ShowDate";

export const Dates = () => {
  const [dates, setDates] = useState([]);

  const dodadiData = () => {
    console.log(dates);
    let date = new Date().toString();
    // spread operator
    var newDates = [...dates];
    newDates.push(date);
    setDates(newDates);
  };
  return (
    <div>
      {/* {dates.map((date, i) => {
        return <p key={i}>{date}</p>;
      })} */}
      <button onClick={dodadiData}>Add Date</button>
      {/* {dates.map((date, i) => {
        return <h2 key={i}>{date}</h2>;
      })} */}
      <ShowDate dates={dates} />
    </div>
  );
};
