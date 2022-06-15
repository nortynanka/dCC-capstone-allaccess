import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useCustomForm from "../hooks/useCustomForm";
import { Link } from "react-router-dom";

import "./PageStructure.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { email: " ", password: " " };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <h3>
        <b>
          <i>Login</i>
        </b>{" "}
        to view your personalized experience
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <p><label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label></p>
        <p><label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label></p>
        {isServerError ? (
          <p className="error">Login failed. Incorrect credentials.</p>
        ) : null}
        <Link to="/register">Click to register!</Link>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
