import { useState } from "react";

const Form = (defaultValues = {}, onSubmit) => {
  const [formData, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    e.persist();
    if (e.target.name === "isCaregiver" || e.target.name === "isOwner") {
      setFormValues({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormValues({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const reset = () => {
    setFormValues(defaultValues);
  };

  return [formData, handleInputChange, handleSubmit, reset];
};

export default Form;
