import { useState } from "react";

// Declare hook code

const useForm = (cb) => {

// State

  const [formValues, setFormValues] = useState({});

// Change handler

  const handleChange = (e) => {
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

  return { formValues, handleChange, handleSubmit };
};

// Export hook

export default useForm;
