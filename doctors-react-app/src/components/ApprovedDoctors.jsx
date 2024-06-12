import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import doctors from "../doctors.json";




import "bootstrap/dist/css/bootstrap.min.css";

import './styles/Card.css'

const ApprovedDoctors = () => {
  const [approvedDoctors, setApprovedDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredDoctors = doctors.filter(
      (doctor) => doctor.status === "approved"
    );
    setApprovedDoctors(filteredDoctors);
  }, []);

  const filtered = approvedDoctors.filter(
    (doctor) =>
      doctor.username.toLowerCase().includes(search.toLowerCase()) ||
      doctor.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="gap">Public Doctors</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by username or category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "300px" }}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filtered.map((doctor) => (
          <div key={doctor.id} className="col">
            <Link to={`/doctor/${doctor.id}`} className="text-decoration-none text-dark">
              <div className="card h-70">
                <div className="card_profile_img"></div>
                <div className="user_details card-body">
                  <h3>{doctor.firstname} {doctor.lastname}</h3>
                  <p>{doctor.category}</p>
                 

                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ApprovedDoctors;
