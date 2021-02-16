import React, { useState } from "react";
import FormRegister from "./FormRegister";
import FormSuccess from "./FormSuccess";
import FormLogin from "./FormLogin";
import { GiMountainRoad } from "react-icons/gi";
import "./Form.css";
import { Button } from "../../../../Button";
import { Link } from "react-router-dom";
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
          <div className="form-content-left">
            <div className="form">
              <h1 className="joinTeamh1">Join Our Team!</h1>
              <GiMountainRoad className="mountainIcon" />
              <p className="form-storyP">Be part of our story!</p>

              <Link to="/registerHost">
                <Button buttonStyle="btn--primary">Become a member</Button>
              </Link>
            </div>
          </div>
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
