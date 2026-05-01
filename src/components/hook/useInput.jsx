import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [formParameters, setFormParameters] = useState({
    defaultValue,
  });
  const [didEdit, setDidEdit] = useState(defaultValue);



 const handleChangeParameters = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false)
  };

  // reset valori form quando gestiti con gli state
  const handleReset = () => {
    setEnteredValue(defaultValue);
    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  const valueIsValid = validationFn(enteredValue);

  return {
      value: enteredValue,
      handleChangeParameters,
      handleInputBlur,
      handleReset,
      hasError: didEdit && !valueIsValid
  }
}