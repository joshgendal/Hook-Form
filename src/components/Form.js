import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [firstNameError, setFirstNameError] = useState(
    "First Name must be more than 2 characters"
  );
  const [lastNameError, setLastNameError] = useState(
    "Last Name must be more than 2 characters"
  );
  const [emailError, setEmailError] = useState(
    "Email must be more than 5 characters"
  );
  const [pwdError, setPwdError] = useState(
    "password must be more than 8 characters"
  );
  const [confirmPwdError, setConfirmPwdError] = useState(
    "password must be the same"
  );

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    e.target.value.length <= 2
      ? setFirstNameError("Last Name must be more than 2 characters")
      : setFirstNameError("");
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    e.target.value.length <= 2
      ? setLastNameError("Last Name must be more than 2 characters")
      : setLastNameError("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.target.value.length <= 5
      ? setEmailError("Email must be more than 5 characters")
      : setEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.target.value.length <= 8
      ? setPwdError("password must be more than 8")
      : setPwdError("");
  };

  const handleConfirmPassword = (e) => {
    setConfirmPw(e.target.value);
    password != e.target.value
      ? setConfirmPwdError("password must be the same")
      : setConfirmPwdError("");
  };

  return (
    <>
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" onChange={handleFirstName} />
        </div>
        {firstNameError ? <p>{firstNameError}</p> : ""}
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" onChange={handleLastName} />
        </div>
        {lastNameError ? <p>{lastNameError}</p> : ""}
        <div>
          <label htmlFor="">Email</label>
          <input type="text" onChange={handleEmail} />
        </div>
        {emailError ? <p>{emailError}</p> : ""}
        <div>
          <label htmlFor="">Password</label>
          <input type="text" onChange={handlePassword} />
        </div>
        {pwdError ? <p>{pwdError}</p> : ""}
        <div>
          <label htmlFor="">Confirm Password</label>
          <input type="text" onChange={handleConfirmPassword} />
        </div>
        {confirmPwdError ? <p>{confirmPwdError}</p> : ""}
      </form>

      <h2>Your Form Data</h2>

      <h3>First Name</h3>
      <span>{firstName}</span>
      <h3>Last Name</h3>
      <span>{lastName}</span>
      <h3>Email</h3>
      <span>{email}</span>
      <h3>Password</h3>
      <span>{password}</span>
      <h3>Confirm Password</h3>
      <span>{confirmPw}</span>
    </>
  );
};

export default Form;
