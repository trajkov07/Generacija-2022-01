import { useState } from "react";

export const ShowDate = (props) => {
  return (
    <div>
      {props.dates.map((date, i) => {
        return <p key={i}>{date}</p>;
      })}
    </div>
  );
};
