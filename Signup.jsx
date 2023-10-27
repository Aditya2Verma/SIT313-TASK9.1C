import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from './firebase';
import Input from "./Input";

function Signup() {
  const navigate = useNavigate();

  const [contact, setcontact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = contact;
  const [errors, setErrors] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  async function handleClick(event) {
    const newErrors = {};

    if (!displayName) {
      newErrors.displayName = 'Name is required';
    } else {
      newErrors.displayName = '';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else {
      newErrors.email = '';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else {
      newErrors.password = '';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/login");
    } catch (error) {
      console.log('Error in creation', error.message);
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  return (
    <div className="Login">
      <p>Create a Dev@Deakin account</p>
      <div className="main">
        <div className="d">
          <p>Name</p>
          <div>
            <Input
              name="displayName"
              type="text"
              placeholder="Enter name"
              onChange={handlepass}
            />
            <div className="error">{errors.displayName}</div>
          </div>
        </div>
        <br></br>

        <div className="d">
          <p>Email</p>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handlepass}
            />
            <div className="error">{errors.email}</div>
          </div>
        </div>
        <br></br>

        <div className="d1">
          <p>Password</p>
          <div>
            <Input
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handlepass}
            />
            <div className="error">{errors.password}</div>
          </div>
        </div>
        <br></br>
        <div className="d1">
          <p>Confirm</p>
          <div>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handlepass}
            />
            <div className="error">{errors.confirmPassword}</div>
          </div>
        </div>
        <br></br>
        
        <button onClick={handleClick} className="btn">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;

//a 
