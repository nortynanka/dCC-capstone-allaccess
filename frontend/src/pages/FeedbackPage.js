import React from "react";
import useCustomForm from "../hooks/useCustomForm";

const FeedbackPage = () => {
  const defaultValues = {};
  const [formData, handleInputChange, handleSubmit] =
    useCustomForm(defaultValues);

  let nowDate = new Date().toLocaleDateString;

  return (
    <div className="container">
      <h3>
        <b>
          <i>Share</i>
        </b>{" "}
        your experience at a Milwaukee business
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p></p>
        <p>
          {" "}
          <label>
            Nickname:{" "}
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
              value={nowDate}
              readOnly={true}
            />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Date of Visit:{" "}
            <input type="date" name="visitDate" value={nowDate} />
          </label>
        </p>
        <p>
          {" "}
          <label>
            Is there parking on site?{" "}
            <input
              type="radio"
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
              type="radio"
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
              type="radio"
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
              type="radio"
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
              type="radio"
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
              type="radio"
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
              type="radio"
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
              type="radio"
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
              type="radio"
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
              type="radio"
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
              type="radio"
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
      </form>
    </div>
  );
};

export default FeedbackPage;
