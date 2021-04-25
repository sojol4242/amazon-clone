import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signin = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth=>{
        history.push("/");
    })
    .catch((error) => {
        alert(error.message);
      });
  };
  // user register
  const register = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        alert("Successfully completed registration");
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt="header-logo"
          className="login-logo"
        />
      </Link>
      <div className="login-form">
        <h2>Sign in</h2>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </form>
        <button className="sign-in-btn" type="submit" onClick={signin}>
          Sign in
        </button>
        <p>
          By continuing, you agree to Amazon's{" "}
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">
            Conditions of Use{" "}
          </a>{" "}
          and{" "}
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
            {" "}
            Privacy Notice.
          </a>
        </p>
        <button className="register-btn" onClick={register}>
          Create a new Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
