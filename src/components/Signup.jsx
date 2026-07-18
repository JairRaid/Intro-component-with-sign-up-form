import errorIcon from "../assets/error-icon.svg";
import React, { useState } from "react";
import "./Signup.css";
import { toast } from "react-toastify";

const Signup = () => {
  const [enteredValue, setEnteredValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleInputChange = (field, value) => {
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

  return (
    <div className="signup">
      <p className="signup__offer">
        <strong>Try it for free 7 days</strong>&nbsp;then
        <br className="break" /> $20/mo. thereafter
      </p>

      <form className="signup__form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="first-name" className="sr-only">
            First name
          </label>
          <input
            id="first-name"
            className={`${errors.firstName ? "input-error" : ""}`}
            name="first-name"
            type="text"
            autoComplete="given-name"
            placeholder="First Name"
            value={enteredValue.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
          <span className={`error-icon ${errors.firstName ? "" : "isVisible"}`}>
            <img src={errorIcon} alt="" />
          </span>
          <p className={`error-message ${errors.firstName ? "" : "isVisible"}`}>
            First Name cannot be empty
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="last-name" className="sr-only">
            Last name
          </label>
          <input
            id="last-name"
            className={`${errors.lastName ? "input-error" : ""}`}
            name="last-name"
            type="text"
            autoComplete="family-name"
            placeholder="Last Name"
            value={enteredValue.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
          <span className={`error-icon ${errors.lastName ? "" : "isVisible"}`}>
            <img src={errorIcon} alt="" />
          </span>
          <p className={`error-message ${errors.lastName ? "" : "isVisible"}`}>
            Last Name cannot be empty
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="email" className="sr-only">
            Last name
          </label>
          <input
            id="email"
            className={`${errors.email ? "input-error" : ""}`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email Address"
            value={enteredValue.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <span className={`error-icon ${errors.email ? "" : "isVisible"}`}>
            <img src={errorIcon} alt="" />
          </span>
          <p className={`error-message ${errors.email ? "" : "isVisible"}`}>
            Looks like this is not an email
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="password" className="sr-only">
            Last name
          </label>
          <input
            id="password"
            className={`${errors.password ? "input-error" : ""}`}
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Password"
            value={enteredValue.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          <span className={`error-icon ${errors.password ? "" : "isVisible"}`}>
            <img src={errorIcon} alt="" />
          </span>
          <p className={`error-message ${errors.password ? "" : "isVisible"}`}>
            Password cannot be empty
          </p>
        </div>

        <button className="button--primary" type="submit">
          Claim your free trial
        </button>

        <small className="signup__terms">
          By clicking the button, you are agreeing to our&nbsp;
          <a className="signup__link" href="#">
            Terms and Services
          </a>
        </small>
      </form>
    </div>
  );
};

export default Signup;
