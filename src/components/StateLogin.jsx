import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "./hook/useInput";

// questo è il modo più comune e semplice per la gestione degli user input in React
export default function StateLogin() {
  const {
    value: emailValue,
    handleChangeParameters: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleReset: handleEmailReset,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleChangeParameters: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    handleReset: handlePasswordReset,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  const handleReset = () => {
    handleEmailReset();
    handlePasswordReset();
  };

  // esempio validazione email, è molto più performante rispetto all'utilizzo di ref o FormData, ma è molto più scomodo da utilizzare quando i form sono lunghi e complessi, ma è molto più semplice da utilizzare rispetto all'utilizzo dei ref o FormData.
  // const emailIsInvalid =
  //  didEdit.email && !isEmail(formParameters.email) && !isNotEmpty(formParameters.email);
  //  la logica di validazione viene spostata direttamente in una cartella di utilità, in questo modo è possibile riutilizzarla in più componenti, e mantenere il codice più pulito e leggibile.
  // const passwordIsInvalid = didEdit.password && !hasMinLength(formParameters.password, 6) && !isNotEmpty(formParameters.password);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formParameters);
    // conviene anche impostare delle validazioni al submit
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
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
          error={emailHasError && "Please enter a valid email."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          value={passwordValue}
          onChange={handlePasswordChange}
          error={
            passwordHasError &&
            "Please enter a valid password (at least 6 characters)."
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
