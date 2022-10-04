import { useState, useEffect } from "react";
export const Login = () => {
  const pocetniVrednost = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(pocetniVrednost);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // pri setiranje na stejt morame sekogas da kreirame nov objekt
    // ne mozeme samo da go izmenime onoj postoeckiot
    // ako sakame nekoj string da koristime kako property na nekoj objekt
    // go stavame vo [] zagradi
    // so ...formValues pravime kopija od objektot formValues (gi kopirame site
    // vrednost sto se vo nego vo drug objekt a pritoa so [] go menuvame ona
    // property so ime name )
    setFormValues({ ...formValues, [name]: value });
  };

  // se povikuva pri sekoja promena na form values objektot
  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const handleSubmit = (e) => {
    // so preventDefault sprecuvame submit na formata i refresh na stranata
    e.preventDefault();
    console.log("formata e submitirana");
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // TODO: ZOSTO OVA NE FUNKCIONIRA
    // Ova ne funkcionirase bidejki vo momentot koga se izvrsuva ovoj if, formErrors e seuste prazen objekt
    // if (Object.keys(formErrors.length) === 0) {
    //   setIsSubmit(true);
    // }

    // Dokolku sakame da go napravime ova bi morale da go napravime na sledniov nacin
    // najprvin rezultatot od validate funkcijata da go stavime vo nekoja promenliva pa togas da rabotime so nego
    // No isto taka bi mozelo i na drug nacin odnosno dole vo JSX (html) kodot kaj sto go pokazuvame
    // sign in kaj ternarniot operator
    // let errorsObject = validate(formValues);
    // setFormErrors(errorsObject);
    // if (Object.keys(formErrors).length === 0) {
    //   setIsSubmit(true);
    // }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    console.log("vnatre vo validate");
    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 3) {
      errors.password = "Password cant be less then 3 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cant be more then 10 characters";
    }
    console.log(errors);
    return errors;
  };

  const onClick = () => {
    console.log("nekoja logika vo funkcijata");
  };

  return (
    <div className="container">
      {
        // ternary operator
        Object.keys(formErrors).length === 0 && isSubmit && (
          <h1>Signed in successfully</h1>
        )
      }

      <form className="form" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleOnChange}
          />
        </div>
        <p>{formErrors.username}</p>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
        </div>
        <p>{formErrors.email}</p>
        {/* <button onClick={onClick}>AKcija</button> */}
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <br />
        <br />
        {
          // Dobra praksa e sekogas na kopceto koe ja submitira formata
          // stavime type="submit"
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
