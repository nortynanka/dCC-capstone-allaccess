import { useState } from "react";

const useCustomForm = (initialValues = {}, onSubmit) => {
  const [formData, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    if (e.target.name === "isCaregiver" || e.target.name === "isOwner") {
      setFormValues({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormValues({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const reset = () => {
    setFormValues(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    reset();
  };

  return [formData, handleInputChange, handleSubmit, reset];
};

export default useCustomForm;
