import React, { useState } from "react";
import useForm from "./useForm";
import { Button } from "../../../../Button";
import validate from "./validateInfo";
import "./Form.css";
import { Link } from "react-router-dom";

function FormLogin({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const [hideForm, setHideForm] = useState(false);

  const toggleForm = () => {
    setHideForm(!hideForm);
  };

  return (
    <div className="form-container">
      <div className={hideForm ? "form-content-left" : "form-content-right"}>
        <form
          className={hideForm ? "hideForm" : "form"}
          onSubmit={handleSubmit}
        >
          <h1>Welcome back!</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username:{" "}
            </label>
            <input
              id="usernameUser"
              type="text"
              name="username"
              placeholder="Enter your username"
              className="form-input"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password:{" "}
            </label>
            <input
              id="passwordUser"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-input"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <Link to="/">
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              type="submit"
            >
              Sing in
            </Button>
          </Link>

          <span className="form-input-login">
            Ready for a new adventures? Create account{" "}
            <Link to="/register">here!</Link>
          </span>
        </form>

        <div className={hideForm ? "form" : "hideForm"}>
          <h1 className="joinTeamh1">Our travelers are waithing for you</h1>

          <div className="form-svg host"></div>
          <p className="form-storyP">Offer them an unforgettable experience</p>
          <Link to="/registerHost">
            <Button buttonStyle="btn--primary">Enter</Button>
          </Link>
        </div>
      </div>

      <div className={hideForm ? "form-content-right" : "form-content-left"}>
        <div className={hideForm ? "hideForm" : "form"}>
          <h1 className="joinTeamh1">Looking for a new adventure?</h1>
          <div className="form-svg traveller"></div>
          <p className="form-storyP">You came to a right place!</p>

          <Link to="/registerHost">
            <Button buttonStyle="btn--primary">Enter</Button>
          </Link>
        </div>
        <form
          className={hideForm ? "form" : "hideForm"}
          onSubmit={handleSubmit}
        >
          <h1>Guide,welcome back!</h1>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email:{" "}
            </label>
            <input
              id="emailHost"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password:{" "}
            </label>
            <input
              id="passwordHost"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-input"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <Link to="addNewAdventure">
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              type="submit"
            >
              Sing in
            </Button>
          </Link>
          <span className="form-input-login">
            Don't have account? Create one <Link to="/register">here!</Link>
          </span>
        </form>
        <div>
          <input type="checkbox" id="lol-checkbox" onChange={toggleForm} />
          <label id="button" htmlFor="lol-checkbox">
            <div id="knob" />
            <div id="subscribe">Host?</div>
            <div id="alright">User?</div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;