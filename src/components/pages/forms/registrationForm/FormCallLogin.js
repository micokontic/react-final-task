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
      <div className="form-login-bck form-wrapper ">
        <div className="form-container">
          <span className="close-btn">×</span>
          <div className="form-content-left"></div>
          {!isSubmitted ? (
            <FormLogin submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default FormCallLogin;
