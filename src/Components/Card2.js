import React from "react";
import { FaClock } from "react-icons/fa"; // Importing the clock icon from Font Awesome icons

const Card2 = () => {
  return (
    <div className="card">
      <div
        style={{
          padding: "20px",
          width: "250px",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <FaClock
            style={{ fontSize: "50px", marginLeft: "20px", color: "red" }}
          />
        </div>
        <div>
          <strong>Chapter-wise segregation</strong>
        </div>
      </div>
    </div>
  );
};

export default Card2;
