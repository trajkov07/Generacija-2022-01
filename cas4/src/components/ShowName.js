import { useState } from "react";

export const ShowName = () => {
  // vrednost e vrednosta koja ja koristime
  // setVrednost e funkcijata so koja ja menuvame taa vrednost
  const [vrednost, setVrednost] = useState();
  let onChange = (event) => {
    const newValue = event.target.value;
    setVrednost(newValue);
  };
  return (
    <div>
      <input placeholder="enter your name" onChange={onChange} />
      <h2 id="vrednost">{vrednost}</h2>
    </div>
  );
};
