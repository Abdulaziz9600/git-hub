import React from "react";
import "./Login.css";
import Logo from "../../assets/img/GitHub-Mark-64px.png";
import { useState } from "react";

const Login = ({uselogin}) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const params = {
    username: userName,
    password: password,
  };
  return (
    <>
      <div className="container">
        <div className="text-center login">
          <img src={Logo} alt="logo" />
          <p className="git-text">Sign in to GitHub</p>

          <div className="d-flex justify-content-center flex-column align-items-center login-box">
            <label className="d-block" htmlFor="email address">
              <p className="email-text">Username or email address</p>
              <input
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                className="d-block rounded email-input"
                type="text"
                name="email address"
                id="email address"
                placeholder="email address"
              />
            </label>
            <label htmlFor="">
              <p className="password-text ">Password</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="d-block password-input rounded"
                type="password"
                name=""
                id="password"
                placeholder="Password"
              />
            </label>
            <button
              className="btn-sign rounded"
              onClick={() => uselogin(params)}
            >
              Sign in
            </button>
          </div>
          <div className="create-box">
            <p className="p-0 m-0">
              New to GitHub?
              <a href="https://github.com/signup?source=login">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
