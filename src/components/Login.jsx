import { useRef } from 'react';

// questo è un modo alternativo per la gestione degli user input in react, ma è meno comune ripsetto all'utilizzo dello state, è più difficile resettare i valori, ed è molto più scomodo quando i form sono lunghi e complessi.
export default function Login() {

  const email = useRef();
  const password = useRef();
 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value; 
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
