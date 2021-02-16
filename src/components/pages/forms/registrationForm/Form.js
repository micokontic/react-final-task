import React, { useState } from "react";
import FormRegister from "./FormRegister";
import FormSuccess from "./FormSuccess";
import "./Form.css";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-wrapper">
        <div className="form-container">
          <span className="close-btn">×</span>
          <div className="form-content-left"></div>
          {!isSubmitted ? (
            <FormRegister submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
