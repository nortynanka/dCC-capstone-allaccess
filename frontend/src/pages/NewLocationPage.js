import React from "react";
import useCustomForm from "../hooks/useCustomForm";
import registerLocation from "../context/AuthContext";

import "./PageStructure.css";

const NewLocationPage = () => {
  const defaultValues = {
    name: "",
    category: "",
    vicinity: "",
    isOwnerRegistered: false,
    ownerName: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerLocation
  );

  return (
    <div className="container">
      <h3>
        <i>Add</i> a business to our database
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p>
          {" "}
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
        </p>
        <p>
          {" "}
          <label>
            What type of business is this?{" "}
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Address:{" "}
            <input
              type="text"
              name="vicinity"
              value={formData.vicinity}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Is the owner registered with allAccess?{" "}
            <input
              type="checkbox"
              name="isOwnerRegistered"
              checked={formData.isOwnerRegistered}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            If so, what is their name?{" "}
            <input
              type="text"
              name="ownerName"
              checked={formData.ownerName}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default NewLocationPage;
