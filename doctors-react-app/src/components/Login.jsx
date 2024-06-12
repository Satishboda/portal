import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import doctorslist from '../doctors.json'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {

    if (username === '' || password === '') {
      alert("Fields are required");
      return;
    }

    try {
      const user = doctorslist.find(doctor => doctor.username === username);

      if (user) {
        localStorage.setItem("name", username);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role",user.role)
        if(user.role==='admin')
        navigate('/dashboard');
      else{
        console.log(user.id)
          navigate(`/doctor/${user.id}`)
      }
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.error("Error fetching doctors data:", error);
      alert("An error occurred while trying to log in");
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span className="input-group-text">
            <FaUser />
          </span>
        </div>
        <div className="input-group mb-3">
          <input
            type={passwordVisible ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="input-group-text" onClick={togglePasswordVisibility} style={{cursor:"pointer"}}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button
          type="submit"
          className="bg-color"
          style={{ width: "100%", height: "10%" }}
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          onClick={handleRegister}
          className="bg-color"
          style={{ width: "100%", height: "10%" }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
