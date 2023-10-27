import React from "react";
import { Link } from "react-router-dom";
import { signoutUser } from './firebase'; 

function Welcome() {
  const handleSignout = () => {
    signoutUser();
  };

  return (
    <div className="Welcome">
      <h1>Welcome to the Welcome Page</h1>
      <p>You are currently logged in!</p>
      <button onClick={handleSignout}>Sign Out</button>
      <Link to="/">Return to the Home Page</Link>
    </div>
  );
}

export default Welcome;

//a

