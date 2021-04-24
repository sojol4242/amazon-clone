import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
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
          <input type="email" placeholder="Your email" required />
          <h5>Password</h5>
          <input type="password" placeholder="Your password" required />
        </form>
        <button className="sign-in-btn" type="submit">
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
        <button className="register-btn">Create a new Amazon account</button>
      </div>
    </div>
  );
};

export default Login;
