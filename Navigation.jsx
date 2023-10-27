import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import "./navigation.css";

const TopBar = () => {
  const [user, setUser] = useState(null); 
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setUser(user);
      } else {
        
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="Top">
      <Link to="/">
        <div className="Home">DEV@Deakin</div>
      </Link>

      <div className="searchBar">
        <input type="search" placeholder="Search" />
      </div>

      <div className="btn1">
        {!user ? ( 
          <Link to="login">
            <button>Login</button>
          </Link>
        ) : ( 
          <Link to="logout">
            <button>Logout</button>
          </Link>
        )}
      </div>

      <div className="btn1">
        {!user ? ( 
          <Link to="signup">
            <button>Sign Up</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
