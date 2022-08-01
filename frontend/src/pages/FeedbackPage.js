import React from "react";
import Form from "../hooks/Form";
import createPost from "../context/AuthContext";

const FeedbackPage = () => {
  const defaultValues = {
    locationName: "",
    nickname: "",
    currentDate: "",
    visitDate: "",
    hasOnSiteParking: false,
    hasEntrances: false,
    isOneLevel: false,
    hasElevator: false,
    hasEscalator: false,
    hasStairsOnly: false,
    hasHearingDevices: false,
    hasVisualAids: false,
    hasAssistants: false,
    hasSeatingSection: false,
    employeeAttitudes: false,
    notes: "",
  };
  const [formData, handleInputChange, handleSubmit] =
    Form(defaultValues, createPost);

  return (
    <div className="container">
      <h3>
        <b>
          <i>Share</i>
        </b>{" "}
        your experience at a Milwaukee business
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <p>
          {" "}
          <label>
            Business name:{" "}
            <input
              type="text"
              name="locationName"
              placeholder="5 character minimum"
              value={formData.locationName}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Your name:{" "}
            <input
              type="text"
              name="nickname"
              placeholder="5 character minimum"
              value={formData.nickname}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Today's date:{" "}
            <input
              type="date"
              name="currentDate"
              value={formData.currentDate}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Date of Visit:{" "}
            <input
              type="date"
              name="visitDate"
              value={formData.visitDate}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Is there parking on site?{" "}
            <input
              type="checkbox"
              name="hasOnSiteParking"
              value={formData.hasOnSiteParking}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Do the entrances and exits open automatically?{" "}
            <input
              type="checkbox"
              name="hasEntrances"
              value={formData.hasEntrances}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Is the business one-leveled?{" "}
            <input
              type="checkbox"
              name="isOneLevel"
              value={formData.isOneLevel}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Is there a public elevator?{" "}
            <input
              type="checkbox"
              name="hasElevator"
              value={formData.hasElevator}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Is there a public escalator?{" "}
            <input
              type="checkbox"
              name="hasEscalator"
              value={formData.hasEscalator}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Are all visitors expected to use stairs?{" "}
            <input
              type="checkbox"
              name="hasStairsOnly"
              value={formData.hasStairsOnly}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Are audio devices available to use?{" "}
            <input
              type="checkbox"
              name="hasHearingDevices"
              value={formData.hasHearingDevices}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Are visual aids available to use?{" "}
            <input
              type="checkbox"
              name="hasVisualAids"
              value={formData.hasVisualAids}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Can visitors request an assistant to accompany them through this
            business?{" "}
            <input
              type="checkbox"
              name="hasAssistants"
              value={formData.hasAssistants}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Are there seating sections reserved for visitors with disabilities?{" "}
            <input
              type="checkbox"
              name="hasSeatingSection"
              value={formData.hasSeatingSection}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Did the employees approach any requests for accommodation with a
            positive attitude?{" "}
            <input
              type="checkbox"
              name="employeeAttitudes"
              value={formData.employeeAttitudes}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Please write a few words about your experience. This field is
            required.{" "}
            <input
              type="text"
              name="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </p>
        <p><button type="submit">Submit Form</button></p>
      </form>
    </div>
  );
};

export default FeedbackPage;
