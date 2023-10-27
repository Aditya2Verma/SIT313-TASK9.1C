import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './Navigation';
import Login from './login';
import Signup from './Signup';
import Logout from './logout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TopBar />} />
        <Route path='/login' element={<Login />} />
        <Route path= '/signup' element = {<Signup/>}/>
        <Route path= '/Logout' element = {<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App; 
