import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import { getAuth, signOut } from "firebase/auth";
import { auth } from "./firebase";


function Logout() {
  const navigate = useNavigate();
  const mail = getAuth();
  const email = mail.currentUser.email;
  async function handleClick(event)
  {
    try{
    const response = await signOut(auth)
    console.log(response);
    navigate("/")
    } 
    catch(error){
    console.log('error in loging out', error.message)
    }
  }

  


  return (
    <div>
      <div className="mains">
        <div className="Logout">
          <div className="">
            <p>Hi {email}</p> 
            <p>Are you sure you want to log out?</p>
            
              <button onClick={handleClick}>Yes</button>
              <button onClick={handleClick}>No</button>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Logout
