import { useState, useEffect } from "react";

export function Movie() {
  const [film1, setFilm1] = useState(0);
  const [film2, setFilm2] = useState(0);

  let glasajZaFilm1 = () => {
    setFilm1(film1 + 1);
  };

  let glasajZaFilm2 = () => {
    setFilm2(film2 + 1);
  };

  useEffect(() => {
    // ova ne e dobra praksa i se izbegnuva
    setFilm1(film1 + 5);
  }, [film2]);

  return (
    <div>
      <div>
        <img
          src="https://c.files.bbci.co.uk/1235F/production/_83719547_blackhole.jpg"
          style={{ width: 300, heigth: 300 }}
        />
        <br />
        <br />
        <button onClick={glasajZaFilm1}>Glasaj za filmot 1</button>
      </div>
      <br />
      <br />
      <div>
        <img
          src="https://images.bauerhosting.com/legacy/empire-tmdb/films/157336/images/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill"
          style={{ width: 300, heigth: 300 }}
        />
        <br />
        <br />
        <button onClick={glasajZaFilm2}>Glasaj za filmot 2</button>
      </div>

      <div>
        <h1>Glasovi za film 1: {film1}</h1>
        <h1>Glasovi za film 2: {film2}</h1>
      </div>
    </div>
  );
}

//
