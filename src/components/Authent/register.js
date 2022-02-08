import React, { useState } from "react";
import Axios from "axios";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const registerUser = () => {
    console.log(username,password,email, "this is the stuff")
    Axios.post("http://localhost:3001/registeruser", {
      username: username,
      password: password,
      email: email,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="register">
      <div className="registerheaderbox">
        <h2 className="registerheader">GameRep</h2>
        <input
          className="registerusername"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          className="registerusername"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        />
        <input
          className="registerpassword"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <button className="registerforgotpassword"></button>
        <button className="registerbutton" onClick={() => registerUser()}>
          <h2 className="registerbuttonregister">Register</h2>
        </button>
      </div>
    </div>
  );
};

export default Register;
