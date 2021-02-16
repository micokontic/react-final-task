import React from "react";
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

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Welcome back! </h1>
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
          <label htmlFor="password" className="form-label">
            Password:{" "}
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

        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          type="submit"
        >
          Sing in
        </Button>
        <span className="form-input-login">
          Ready for a new adventures? Create account{" "}
          <Link to="/register">here!</Link>
        </span>
      </form>
    </div>
  );
}

export default FormLogin;
