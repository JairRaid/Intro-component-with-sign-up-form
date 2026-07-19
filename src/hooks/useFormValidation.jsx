import { useState } from "react";
import { toast } from "react-toastify";

const useFormValidation = (initialInputValues, initialErrors) => {
  const [enteredValue, setEnteredValue] = useState(initialInputValues);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (field, value) => {
    setEnteredValue((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleErrors()) return; // if true then hasError then return
    setErrors((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
    );

    setEnteredValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    toast.success("Form submitted successfully!");
  };

  const handleErrors = () => {
    const { firstName, lastName, email, password } = enteredValue;
    const tempErrors = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    };

    tempErrors.firstName = firstName.trim() === "";
    tempErrors.lastName = lastName.trim() === "";
    tempErrors.email = email.trim() === "" || !validateEmail(email);
    tempErrors.password = password.trim() === "";

    setErrors(tempErrors);

    const hasError = Object.values(tempErrors).some(Boolean);

    return hasError;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  return { enteredValue, errors, handleChange, handleSubmit, validateEmail };
};

export default useFormValidation;
