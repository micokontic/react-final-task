import React, { useState } from "react";
import FormSuccess from "./FormSuccess";
import FormLogin from "./FormLogin";
import "./Form.css";
const FormCallLogin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className=" form-wrapper ">
        {!isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default FormCallLogin;
