import React from "react";
import { FaBook } from "react-icons/fa"; // Importing the book icon from Font Awesome icons

const Card3 = () => {
  return (
    <div className="card">
      <div
        style={{
          padding: "20px",
          width: "300px",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <FaBook
            style={{ fontSize: "50px", marginLeft: "20px", color: "red" }}
          />
        </div>
        <div>
          <strong>Past Reference & Examiner comments</strong>
        </div>
      </div>
    </div>
  );
};

export default Card3;
