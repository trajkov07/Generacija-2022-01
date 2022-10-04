import { useState, useEffect } from "react";

export const DomasnaForma = () => {
  const pocetniVrednosti = { ime: "", prezime: "", telefon: "" };
  const [formValues, setFormValues] = useState(pocetniVrednosti);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let areErrors = validate(formValues);
    console.log(areErrors);
    setErrors(areErrors);
    if (Object.keys(areErrors).length === 0) {
      setIsSubmit(true);
    }
  };

  const validate = (values) => {
    const formErrors = {};
    const regex = /^\d+$/;
    if (values.ime.length < 3) {
      formErrors.ime = "Imeto ne smee da bide pomalku od 3 karakteri";
    } else if (values.ime.length > 20) {
      formErrors.ime = "Imeto ne smee da bide poveke od 20 karakteri";
    }

    if (values.prezime.length < 5) {
      formErrors.prezime = "Prezimeto ne smee da bide pomalku od 5 karakteri";
    } else if (values.prezime.length > 20) {
      formErrors.prezime = "Prezimeto ne smee da bide poveke od 20 karakteri";
    }

    if (values.telefon.length < 9 || !values.telefon.length > 9) {
      formErrors.telefon = "Telefonskiot broj bi trebalo da sodrzi 9 brojki";
    } else if (!regex.test(values.telefon)) {
      formErrors.telefon = "Telefonskiot broj mora da sodrzi samo brojki";
    }

    return formErrors;
  };

  return (
    <div>
      {isSubmit ? (
        <h1>Formata e submitirana</h1>
      ) : (
        <form onSubmit={handleOnSubmit}>
          <h1>Domasna Forma</h1>
          <div>
            <label>Ime</label>
            <input
              type="text"
              name="ime"
              placeholder="Ime"
              onChange={handleOnChange}
            />
          </div>
          <p> {errors.ime} </p>
          <div>
            <label>Prezime</label>
            <input
              type="text"
              name="prezime"
              placeholder="Prezime"
              onChange={handleOnChange}
            />
          </div>
          <p> {errors.prezime} </p>
          <div>
            <label>Telefon</label>
            <input
              type="text"
              name="telefon"
              placeholder="Telefon"
              onChange={handleOnChange}
            />
          </div>
          <p> {errors.telefon} </p>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};
