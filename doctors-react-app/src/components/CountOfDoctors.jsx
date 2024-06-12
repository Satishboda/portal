

import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaUserPlus,
  FaTimesCircle,
  FaHourglass,
} from "react-icons/fa";
import doctors from "../doctors.json";

const CountOfDoctors = () => {
  const [approved, setApproved] = useState(0);
  const [registered, setRegistered] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [underReview, setUnderReview] = useState(0);

  useEffect(() => {
    let approvedCount = 0;
    let registeredCount = 0;
    let rejectedCount = 0;
    let underReviewCount = 0;

    doctors.forEach((doctor) => {
      switch (doctor.status) {
        case "approved":
          approvedCount++;
          break;
        case "registered":
          registeredCount++;
          break;
        case "rejected":
          rejectedCount++;
          break;
        case "under review":
          underReviewCount++;
          break;
        default:
          break;
      }
    });

    setApproved(approvedCount);
    setRegistered(registeredCount);
    setRejected(rejectedCount);
    setUnderReview(underReviewCount);
  }, []);

  return (
    <div className="container mt-4" style={{ width: "100%" }}>
      {/* <h2 className="text-center">Count of Doctors by Status</h2> */}
      <div className="row">
        <div className="col">
          <div className="status-container text-center">
            <div
              className="alert alert-success d-flex flex-column justify-content-center align-items-center "
              role="alert"
            >
              <FaCheckCircle size={60} style={{ marginBottom: "10px" }} />
              <div style={{ fontSize: "24px" }}>
                <strong>Approved:</strong> {approved}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="status-container text-center" >
            <div
              className="alert alert-primary d-flex flex-column justify-content-center align-items-center "
              role="alert"
            >
              <FaUserPlus size={60} style={{ marginBottom: "10px" }} />
              <div style={{ fontSize: "24px" }}>
                <strong>Registered:</strong> {registered}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="status-container text-center" >
            <div
              className="alert alert-danger d-flex flex-column justify-content-center align-items-center"
              role="alert"
            >
              <FaTimesCircle size={60} style={{ marginBottom: "10px" }} />{" "}
              <div style={{ fontSize: "24px" }}>
                <strong>Rejected:</strong> {rejected}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="status-container text-center">
            <div
              className="alert alert-warning d-flex flex-column justify-content-center align-items-center"
              role="alert"
            >
              <FaHourglass size={60} style={{ marginBottom: "10px" }} />
              <div style={{ fontSize: "24px" }}>
                <strong>underReview:</strong> {underReview}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountOfDoctors;
