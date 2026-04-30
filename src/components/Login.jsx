import { useState } from 'react';

export default function Login() {

  const [formParameters, setFormParameters] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();  
    console.log(formParameters);
  }

  const handleChangeParameters = (event) => {
    setFormParameters({
      ...formParameters,
      [event.target.name]: event.target.value
    });
  }

 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={formParameters.email} onChange={handleChangeParameters} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={formParameters.password} onChange={handleChangeParameters} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
