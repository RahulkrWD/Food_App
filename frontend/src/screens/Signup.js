import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

      const navigate = useNavigate()
     
      const handleSignup = async () => {
        try {
          await axios.post('http://localhost:6600/signup', {
            name, email, phone, password
          });
          console.log('Signup successful!');
          navigate("/login")
        } catch (error) {
          console.error('Error during signup:', error.response.data.error);
        }
      };
  return (
    <>
    
      <div className='body'>
        <div className='container container-signup'>
          <center>
            <h5>Sign up</h5>
              <div className="text-name">
                
                <input
                  type="text"
                  // name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="name input"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="text-email">
                <input
                  type="text"
                  // name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  className="email input"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="text-phone">
                <input
                  type="text"
                  // name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value )}
                  className="phone input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="text-password">
                <input
                  type="password"
                  // name="password"
                  value={password}
          onChange={(e) => setPassword(e.target.value)}
                  className="password input"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className="btn btn-success"  onClick={handleSignup} >
                Sign Up
              </button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            
          </center>
          
        </div>

      </div>
    </>
  )
}

export default Signup
