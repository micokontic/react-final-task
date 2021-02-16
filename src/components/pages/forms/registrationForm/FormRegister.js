import React from "react";
import useForm from "./useForm";
import { Button } from "../../../../Button";
import validate from "./validateInfo";
import "./Form.css";
import { Link } from "react-router-dom";

function FormRegister({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default FormRegister;
