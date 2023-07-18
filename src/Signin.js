

import React, { useState} from 'react';
import './Signin.css';
import {Link} from "react-router-dom"
import { FaInstagram,FaYoutube,FaTwitter, FaMobile, FaGoogle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '727721euit042@skcet.ac.in' && password === '1234') {
    
     alert('Login successful!');
     history.push('/Sidebar');
    } else {
     alert('Invalid email or password');
     history.push('./Signin')
    
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogCred = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <div className="login-page">
     
     {/* left section */}
      <div className="company-section">
        <div className=''><h1>Musify</h1></div>
      
        <div className='footer1'>
         <h3 className='rights'>@2023 All Rights Reserved   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="https://www.instagram.com/"><FaInstagram size={20} className='icon'/></a>&nbsp;&nbsp;
         <a href="https://www.instagram.com/"><FaTwitter size={20} className='icon' /></a>&nbsp;&nbsp;
         <a href="https://www.instagram.com/"><FaYoutube size={20} className='icon' /></a>&nbsp;&nbsp;
         </h3>
        </div>
      </div>
      {/* right section */}
    <div className="login1-page">
      <div className="login-container">
        <h2>Sign In</h2>
        <form onSubmit={handleLogCred}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
         
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" onClick={handleLogin}  className='signinbutton'>Log In</button>
          <h4>------------- or ----------------</h4>
         
        
          <button type="button"   className='continue'><FaGoogle className='music'/>  Continue with Google</button>
      
          <br />
         
          <br /><br />
        </form>
          <button type="button" className='continue'><FaMobile className='music'/>  Continue with Number</button>
        <br />
          <h4 className='newuser'>New User?</h4>
          <button type="button" className='signinbutton'><Link to="signup">Create new Account</Link></button></div>  
      </div>
      <div>
    </div>

    </div>

  );
};

export default LoginPage;
