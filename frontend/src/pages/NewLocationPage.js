import React, { useContext } from "react";
import Form from "../hooks/Form";
import AuthContext from "../context/AuthContext";

import "./PageStructure.css";

const NewLocationPage = () => {
  const defaultValues = {
    name: "",
    category: "",
    vicinity: "",
    isOwnerRegistered: false,
    ownerName: "",
  };

  const { registerLocation } = useContext(AuthContext);

  const [formData, handleInputChange, handleSubmit] = Form(
    defaultValues,
    registerLocation
  );

  return (
    <div className="container">
      <h3>
        <i>Add</i> a business to our database
      </h3>
      <form children={Form} className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder="5 character minimum"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          What type of business is this?{" "}
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          Address:{" "}
          <input
            type="text"
            name="vicinity"
            value={formData.vicinity}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          Is the owner registered with allAccess?{" "}
          <input
            type="checkbox"
            name="isOwnerRegistered"
            checked={formData.isOwnerRegistered}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <label>
          If so, what is their name?{" "}
          <input
            type="text"
            name="ownerName"
            checked={formData.ownerName}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default NewLocationPage;
