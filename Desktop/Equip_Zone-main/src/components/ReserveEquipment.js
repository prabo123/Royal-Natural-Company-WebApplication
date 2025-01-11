import React from "react";
import "./ReserveEquipment.css";

const ReserveEquipment = () => {
  return (
    <div className="reserve-container">
      {/* Form Section */}
      <div className="form-section">
        <h3>SPORTS EQUIPMENT MANAGEMENT SYSTEM</h3>
        <h1>equipZone</h1>
        <h2>Reserve A Equipment</h2>

        <form className="equipment-form">
          <div className="form-group">
            <label htmlFor="name">Initials with Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your initials with name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="university-id">University ID</label>
            <input
              type="text"
              id="university-id"
              placeholder="Enter your university ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="faculty">Faculty</label>
            <input type="text" id="faculty" placeholder="Enter your faculty" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src="runnerup.png" // Replace with your actual image file
          alt="Runner with torch"
          className="runner-image"
        />
      </div>
    </div>
  );
};

export default ReserveEquipment;
