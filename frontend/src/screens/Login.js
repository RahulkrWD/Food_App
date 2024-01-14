import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token , setToken] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
   await axios.post("http://localhost:6600/login",{
email, password
   });
      console.log("Login successful!");
      navigate("/");
      // token
     // setToken(response.data.token);

    } catch (error) {
      console.error("Error during login:", error.response.data.error);
    }
  };
  return (
    <>
      <div className="body">
        <div className="container container-signup">
          <center>
            <h5>Login</h5>

            <div className="text-email">
              <input
                type="text"
                // name="email"
                value={email}
                //  id="email"
                onChange={(e) =>
                  setEmail(e.target.value.toLowerCase())
                }
                className="email input"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="text-password">
              <input
                type="password"
                // name="password"
                value={password}
                //  id="password"
                onChange={(e) =>
                setPassword( e.target.value)
                }
                className="password input"
                placeholder="Enter your password"
                required
              />
            </div>
            <button className="btn btn-success" onClick={handleLogin}>
              Login
            </button>
            <p>
              I,m new user ?<Link to="/signup"> Signup</Link>
            </p>
          </center>
        </div>
      </div>
    </>
  );
}

export default Login;
