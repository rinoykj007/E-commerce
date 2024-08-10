import React, { useState } from "react";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="Signup">
      <div className="Signup-form">
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <input
              className="Signup-input"
              type="text"
              placeholder="Name"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <input
              className="Signup-input"
              placeholder="Enter your Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <input
              className="Signup-input"
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="Signup-input" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
