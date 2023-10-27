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
  const [error, setError] = useState(null);

  async function handleClick(event) {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!displayName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
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

    setcontact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="Login">
      <p>Create a Dev@Deakin account</p>
      <div className="main">
        <div className="d">
          <p>Name</p>
          <Input
            name="displayName"
            type="text"
            placeholder="Enter name"
            onChange={handlepass}
          />
        </div>
        <br></br>

        <div className="d">
          <p>Email</p>
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handlepass}
          />
        </div>
        <br></br>

        <div className="d1">
          <p>Password</p>
          <Input
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={handlepass}
          />
        </div>
        <br></br>
        <div className="d1">
          <p>Confirm</p>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handlepass}
          />
        </div>
        <br></br>
        
        {error && <div className="error">{error}</div>}

        <button onClick={handleClick} className="btn">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
