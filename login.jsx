import Input from "./Input"
import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import {signinAuthUserWithEmailAndPassword} from './firebase'
import "./login.css"


function Login() {

  const navigate = useNavigate();
  const [contact, setcontact] =useState({
    email:'',
    password:''
  })
   const {email,password}= contact
   console.log(contact)

  async function handleClick(event)
  {

    if (!email ||  !password  ) {
      alert('Please fill in all fields.');
      return;
    }

    try{
    const response = await signinAuthUserWithEmailAndPassword(email,password);
    console.log(response);
    navigate("/");
    } 
    catch(error){
      alert("akjebf");
    console.log('error in login', error.message)
    }
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
  <div className="Login">
    <div className="main">

      <div className="main2">
        <Link to="/signup" onClick={handleClick}>
          <button>Signup</button>
        </Link>
      </div>

      <p>Your Email</p>
      <Input
        name = 'email'
        type='email'
        placeholder='email'
        onChange ={handlepass}

        />

      <p>Your Password</p>
      <Input
        name= 'password'
        type='password'
        placeholder='password'
        onChange ={handlepass}
        />
 
      
      
        <button onClick={handleClick}>Login</button>
      
    </div>
  </div>
)}
export default Login