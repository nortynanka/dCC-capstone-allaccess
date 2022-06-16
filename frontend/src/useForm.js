import { useState } from "react";

// Declare hook code

const useForm = (cb) => {

// State

  const [formValues, setFormValues] = useState({});

// Change handler

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

// Submit handler

  const handleSubmit = (e) => {
    e.preventDefault();
    cb();
    setFormValues({});
    e.target.reset();
  };

// Return values

  return { formValues, handleInputChange, handleSubmit };
};

// Export hook

export default useForm;
