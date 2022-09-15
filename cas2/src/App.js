import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello";
import HelloInMacedonian from "./components/HelloInMacedonian";

//funkcionalna komponenta
function App() {
  let number = 10;
  let ime = "Martin";
  return (
    // React fragment morame da imame parent komponenta
    <>
      {/* <h1 className="class1">Hello from React</h1>
      <h1>Hello 2</h1>
      <p> {5 + 5} </p>
      <p> 5 + 5 </p>
      <div> {number} </div> */}
      <HelloInMacedonian />

      <Hello ime={ime} />
    </>
  );
}

export default App;
