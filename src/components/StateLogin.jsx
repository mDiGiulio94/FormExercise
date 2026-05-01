import { useState } from "react";
import Input from "./Input";

// questo è il modo più comune e semplice per la gestione degli user input in React
export default function StateLogin() {
  const [formParameters, setFormParameters] = useState({
    email: "",
    password: "",
  });
    const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })


  // esempio validazione email, è molto più performante rispetto all'utilizzo di ref o FormData, ma è molto più scomodo da utilizzare quando i form sono lunghi e complessi, ma è molto più semplice da utilizzare rispetto all'utilizzo dei ref o FormData.
  const emailIsValid =
   didEdit.email && !formParameters.email.includes("@");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formParameters);
    // conviene anche impostare delle validazioni al submit
  };

  const handleChangeParameters = (event) => {
    setFormParameters({
      ...formParameters,
      [event.target.name]: event.target.value,
    });
    setDidEdit(prevEdit => ({
      ...prevEdit,
        [event.target.name]: false,
    }))
  };

  // reset valori form quando gestiti con gli state
  const handleReset = (event) => {
    setFormParameters({
      email: "",
      password: "",
    });
  };

  const handleInputBlur = (event) => {
    setDidEdit(prevEdit =>({
      ...didEdit,
      [event.target.name]: true,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
     <Input 
     label="Email"
     id="email"
     type="email"
     name="email"
     onBlur={handleInputBlur}
     value={formParameters.email}
     onChange={handleChangeParameters}
     error={didEdit.email && !formParameters.email.includes("@") && "Please enter a valid email address."}
     />

     <Input 
     label="Password"
     id="password"
     type="password"
     name="password"
     onBlur={handleInputBlur}
     value={formParameters.password}
     onChange={handleChangeParameters}
     error={didEdit.password && formParameters.password.length < 6 && "Please enter a valid password (at least 6 characters)."}
     />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
