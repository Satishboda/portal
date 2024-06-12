
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">
          Doctors Portal
        </Link>
      </div>
      
      <div className="nav-right">
        {(localStorage.getItem("isLoggedIn") === 'undefined' || localStorage.getItem("isLoggedIn") === null) ? (
          
          <Link to="/login" className="nav-link" onClick={handleLogin}>
            Login
          </Link>
        ) : (
          <Link to="/" className="nav-link" onClick={handleLogout}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

