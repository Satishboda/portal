import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import doctors from "../doctors.json";
import Navbar from "./Navbar";
import './styles/Profile.css'
import SideNavbar from "./SideNavbar";
import axios from 'axios'

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState([]);
  const { id } = useParams();
  const navigate=useNavigate()
  console.log(id)

  useEffect(() => {
    const foundDoctor = doctors.find((d) => d.id === parseInt(id));
    setDoctor(foundDoctor);
  }, [id]);
  console.log(doctor);
  const handleApprove = async () => {
    try {
      const response = await fetch(`http://localhost:5000/approve-doctor/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while approving the doctor');
    }
  };
  const handleReject = async () => {
    try {
      const response = await fetch(`http://localhost:5000/reject-doctor/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while approving the doctor');
    }
  };
  const handleDelete = async () => {
    try {
        const response = await fetch(`http://localhost:5000/delete-doctor/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            navigate('/alldoctors')
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while deleting the doctor');
    }
};
const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.put(`http://localhost:5000/update-doctor/${id}`, doctor); 
    console.log('Update successful', response.data);
    alert('update successful')
  } catch (error) {
    console.error('Error updating doctor', error);
  }
};
const handleChange = (e) => {
  const { name, value } = e.target;
  setDoctor({
    ...doctor,
    [name]: value
  });
};

  

  return (
    <div className="d-flex">
    {localStorage.getItem("role")==='admin' && (
    <SideNavbar/>
    )}

    <div className="width">
        <Navbar/>
        {localStorage.getItem('role')==='admin' && (
    <div className="container" >
        <h2 className="gap">Doctor Profile</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card_profile_img"></div>
              <div className="user_details mt-4">
                <p>
                  <strong>Username:</strong> {doctor.username}
                </p>
                <p>
                  <strong>Email:</strong> {doctor.emailid}
                </p>
                <p>
                  <strong>Phone:</strong> {doctor.phone}
                </p>
                <p>
                  <strong>Experience:</strong> {doctor.experience}
                </p>
                <p>
                  <strong>Category:</strong> {doctor.category}
                </p>
                <p>
                  <strong>Status:</strong> {doctor.status}
                 
                </p>
                <div>
                {doctor.status==='registered' && localStorage.getItem('role')==='admin' &&  (
                  <div>
                    <button onClick={handleApprove} className="my-style">Approve</button>
                    <button onClick={handleReject} className="my-style">Reject</button>
                    </div>
                  )}
                  {doctor.status==='rejected' && localStorage.getItem('role')==='admin' &&  (
                    <button onClick={handleDelete} className="my-style">Delete</button>
                  )}
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}
      {localStorage.getItem('role')==='user' && (
        <div className="container" style={{ width: '30%', margin: '10px auto' ,border:'2px solid black'}}>
        <form onSubmit={handleUpdate}>
        <div>
          <label >Username</label>
          <input
            type="text"
            name="username"
            value={doctor.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            value={doctor.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={doctor.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email ID</label>
          <input
            type="email"
            name="emailid"
            value={doctor.emailid}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={doctor.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={doctor.experience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={doctor.category}
            onChange={handleChange}
            style={{marginBottom:'8px'}}
          />
        </div>
        <button type="submit" className="mb-3">Save</button>
      </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default DoctorProfile;
