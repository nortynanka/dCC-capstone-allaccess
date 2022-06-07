import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import useCustomForm from "../hooks/useCustomForm";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = { nickname: "", email: "", password: "", isAdmin: false, isCaregiver: false, isOwner: false };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="container">
      <h2>Sign Up for an Account</h2>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <label>
          Nickname:{" "}
          <input
            type="text"
            name="nickname"
            placeholder="5 character minimum"
            value={formData.nickname}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          Admin:{" "}
          <input
            type="checkbox"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          Caregiver:{" "}
          <input
            type="checkbox"
            name="isCaregiver"
            checked={formData.isCaregiver}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          Business Owner:{" "}
          <input
            type="checkbox"
            name="isOwner"
            checked={formData.isOwner}
            onChange={e => handleInputChange(e)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
