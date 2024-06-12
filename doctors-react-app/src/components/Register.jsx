import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Register.css';
import Navbar from './Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    emailid: '',
    phone: '',
    experience: '',
    category: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate('/login');
        setFormData({
          username: '',
          firstname: '',
          lastname: '',
          emailid: '',
          phone: '',
          experience: '',
          category: '',
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering');
    }
  };
  return (
    <div>
    <Navbar/>
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="emailid"
            value={formData.emailid}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience (years):</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            min='0'
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select status</option>
            <option value="registered">Registered</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="under review">Under Review</option>
          </select>
        </div> */}
        <button type="submit" >
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
