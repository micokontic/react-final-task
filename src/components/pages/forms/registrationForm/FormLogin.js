import React, { useState,useContext } from "react";
import useForm from "./useForm";
import { Button } from "../../../../Button";
import validate from "./validateInfo";
import "./Form.css";
import { Link } from "react-router-dom";
import axios from "axios";
import  {AuthContext}  from "../../../../context/auth";
import {WhichUserContext} from "../../../../context/WhichUser"


function FormLogin({ submitForm }) {
  const { authTokens, setTokens } = useContext(AuthContext);
  const { currentUser, setUser } =useContext(WhichUserContext);

  //2 je user
  const { handleChange:handleChange2, values:values2, handleSubmit:handleSubmit2, errors:errors2} = useForm(
    submitForm,
    validate
  );

  // 1 je guide
  const { handleChange:handleChange1, values:values1, handleSubmit:handleSubmit1, errors:errors1 } = useForm(
    submitForm,
    validate
  );
  const [hideForm, setHideForm] = useState(false);
  const [ErrorMessage,setErrorMessage]=useState('')


  const toggleForm = () => {
    setHideForm(!hideForm);
  };

  
  
  const signInHandler=(e)=>{
    e.preventDefault();
    var sendingData={password:values2.password,username:values2.username}
    console.log(sendingData)
    axios
    .post("http://api.meadventures.tk/auth/jwt/create/",sendingData)
    .then((result)=>{
      console.log(result);
      let jwt=result.data.access;
      console.log(jwt);
      setTokens(jwt);
      setUser('user');
      window.location.href = '/'
    }).catch((error)=>{
      setErrorMessage('Your email or password were incorrect.')
    })
  }


  return (
    <div className="form-container">
      <div className={hideForm ? "form-content-left" : "form-content-right"}>
        <form
          className={hideForm ? "hideForm" : "form"}
          onSubmit={handleSubmit2}
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
              value={values2.username}
              onChange={handleChange2}
            />
            {errors2.username && <p>{errors2.username}</p>}
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
              value={values2.password}
              onChange={handleChange2}
            />
            {ErrorMessage!=''?<p>{ErrorMessage}</p>:errors2.password && <p>{errors2.password}</p>}
          </div>
          <Link to="/">
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              type="submit"
              onClick={signInHandler}
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
          {/*   <Link to="/registerHost">
            <Button buttonStyle="btn--primary">Enter</Button>
          </Link> */}
        </div>
      </div>

      <div className={hideForm ? "form-content-right" : "form-content-left"}>
        <div className={hideForm ? "hideForm" : "form"}>
          <h1 className="joinTeamh1">Looking for a new adventure?</h1>
          <div className="form-svg traveller"></div>
          <p className="form-storyP">You came to a right place!</p>

          {/*   <Link to="/registerHost">
            <Button buttonStyle="btn--primary">Enter</Button>
          </Link> */}
        </div>
        <form
          className={hideForm ? "form" : "hideForm"}
          onSubmit={handleSubmit1}
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
              value={values1.email}
              onChange={handleChange1}
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
              value={values1.password}
              onChange={handleChange1}
            />
          </div>
          <Link to="addNewAdventure">
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              type="submit"
              onClick={signInHandler}
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
