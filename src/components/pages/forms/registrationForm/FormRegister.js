import React, { useState } from "react";
import useForm from "./useForm";
import { Button } from "../../../../Button";
import validate from "./validateInfo";
import "./Form.css";
import { Link } from "react-router-dom";
import { GiMountainRoad } from "react-icons/gi";

function FormRegister({ submitForm }) {
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
      <div className="form-content-left">
        <div className={hideForm ? "form" : "hideForm"}>
          <h1 className="joinTeamh1">korisnik!</h1>
          <GiMountainRoad className="mountainIcon" />
          <p className="form-storyP">tekst za korisnika</p>

          <Link to="/registerHost">
            <Button buttonStyle="btn--primary">Enter</Button>
          </Link>
        </div>

        <div className={hideForm ? "hideForm" : "form"}>
          <h1 className="joinTeamh1">host!</h1>
          <GiMountainRoad className="mountainIcon" />
          <p className="form-storyP">tekst za hosta!</p>

          <Link to="/registerHost">
            <Button buttonStyle="btn--primary">Enter</Button>
          </Link>
        </div>
      </div>

      <div className="form-content-right">
        <form
          className={hideForm ? "form" : "hideForm"}
          onSubmit={handleSubmit}
        >
          <h1>Join us today!</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username:{" "}
            </label>
            <input
              id="username"
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
            <label htmlFor="email" className="form-label">
              Email:{" "}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              password:{" "}
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-input"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Confirm password:{" "}
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              className="form-input"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <Button buttonStyle="btn--primary" type="submit">
            Register
          </Button>
          <span className="form-input-login">
            Already have an account? Login <Link to="/log-in">here</Link>
          </span>
        </form>

        <form
          className={hideForm ? "hideForm" : "form"}
          onSubmit={handleSubmit}
        >
          <h1>Host!</h1>
          <div className="form-inputs">
            <label htmlFor="firstName" className="form-label">
              First Name:{" "}
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter your name"
              className="form-input"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="lastName" className="form-label">
              Last Name:{" "}
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="form-input"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email:{" "}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="experience" className="form-label">
              Experience:{" "}
            </label>
            <input type="range" id="test5" min="0" max="10" />
          </div>

          <div className="form-inputs">
            <label htmlFor="phoneNumber" className="form-label">
              Phone number:{" "}
            </label>
            <input
              id="phoneNumber"
              type="number"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="form-input"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </div>

          <Button buttonStyle="btn--primary" type="submit">
            Register
          </Button>
          <span className="form-input-login">
            Already have an account? Login <Link to="/log-in">here</Link>
          </span>
        </form>
        <div>
          <input type="checkbox" id="lol-checkbox" onChange={toggleForm} />
          <label id="button" htmlFor="lol-checkbox">
            <div id="knob" />
            <div id="subscribe">User?</div>
            <div id="alright">Host?</div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
