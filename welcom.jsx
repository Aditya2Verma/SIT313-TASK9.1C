import React from "react";
import { Link } from "react-router-dom";
import { signoutUser } from './firebase'; // Import the signout function from your Firebase file

function Welcome() {
  const handleSignout = () => {
    // Call the signout function from your Firebase file to sign the user out.
    // You should implement this function in your Firebase file.
    signoutUser();
  };

  return (
    <div className="Welcome">
      <h1>Welcome to the Welcome Page</h1>
      <p>You are now logged in!</p>
      <button onClick={handleSignout}>Sign Out</button>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Welcome;
