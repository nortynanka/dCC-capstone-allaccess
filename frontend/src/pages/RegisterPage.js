import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Form from "../hooks/Form";

const RegisterPage = () => {

  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    nickname: "",
    email: "",
    password: "",
    address: "",
    isAdmin: false,
    isCaregiver: false,
    isOwner: false,
  };
  const [formData, handleInputChange, handleSubmit] = Form(
    defaultValues,
    registerUser
  );

  return (
    <div className="container">
      <h3>
        <i>Create</i> a new account
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          Display Name:{" "}
          <input
            type="text"
            name="nickname"
            placeholder="5 character minimum"
            value={formData.nickname}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            placeholder="Valid email required"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            placeholder="8 character minimum"
            value={formData.password}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          Address:{" "}
          <input
            type="text"
            name="address"
            placeholder="Required; not shared with anyone"
            checked={formData.address}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          Bio:{" "}
          <input
            type="text"
            name="bio"
            placeholder="Optional"
            checked={formData.bio}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          Check the box if you are a caregiver of someone with a disability.{" "}
          <input
            type="checkbox"
            name="isCaregiver"
            checked={formData.isCaregiver}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          Check the box if you are a business owner.{" "}
          <input
            type="checkbox"
            name="isOwner"
            checked={formData.isOwner}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
