function Sport(props) {
  // props.lista e listata so elementi koja se vika sportoviILuge
  // koja se prakja so ime lista preku App.js na linija 26
  console.log(props.lista);
  return (
    <div>
      {/* <h1>My name is {name}.</h1>
      <p>My favourite sport {sport}.</p> 
      // edinicenelement e nesto sto moze da go imenuvame kako sakame
      */}
      {
        //.map metodot gi izminuva site elementi sto se vnater vo props.lista
      }
      {props.lista.map((edinicenElement) => {
        return <h1>{edinicenElement.name + " " + edinicenElement.sport}</h1>;
      })}
    </div>
  );
}

export default Sport;

// Napravete komponenta koja sto kje prikazuva komentari,
// Neka tie komentari imaat id, avtor, sodrzina
// Prate ja listata od app.js preku props vo Komentari
// Tamu prikazete ja taa lista so bilo kakvi tagovi(p tag ili li)
