import HelloInMacedonian from "./HelloInMacedonian";
import "./../css/Hello.css";

export const Hello = (props) => {
  console.log(props);
  return (
    <>
      <h1 className="pozdrav">Hello</h1>
      <h2> {props.ime} </h2>
      <h1 style={{ color: "red", backgroundColor: "blue" }}>
        Vaka se veli na makedonski
      </h1>
      <HelloInMacedonian />
    </>
  );
};

// kreiraj funkcionalna komponenta kade vo h1 element kje gi staite
// vasite 3 hobija

// kreirajte druga komponenta kade vo h1 kje go staite vaseto
// omileno hobi

// kreiraj ja prvata komponenta
// ja kreirame vtorata komponenta
// potoa vtorata komponenta ja pokazuvame vo prvata

// prvata komponenta morame da ja stavime vo App.js
