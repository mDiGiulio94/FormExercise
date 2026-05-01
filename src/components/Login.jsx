import { useRef, useState } from 'react';

// questo è un modo alternativo per la gestione degli user input in react, ma è meno comune ripsetto all'utilizzo dello state, è più difficile resettare i valori, ed è molto più scomodo quando i form sono lunghi e complessi.
export default function Login() {
  const [formIsInvalid, setFormIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();
 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value; 

    // reset dei valori del form quando gestiti da ref
    event.target.reset();

    // esempio di validazione al submit, è molto meno performante rispetto all'utilizzo dello state, ma è molto più semplice da utilizzare rispetto all'utilizzo dello state quando i form sono lunghi e complessi, ma è molto più scomodo da utilizzare rispetto all'utilizzo dello state.
    const emailIsInvalid = !enteredEmail.includes("@");
    const passwordIsInvalid = enteredPassword.length < 6;
    setFormIsInvalid(emailIsInvalid || passwordIsInvalid);
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          {formIsInvalid && <p className="error">Please enter a valid email.</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
        {formIsInvalid && <p className="error">Please enter a valid password (at least 6 characters).</p>}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
