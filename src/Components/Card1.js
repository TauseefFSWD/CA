import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"; // Importing the in and out icons from Font Awesome icons

const Card1 = () => {
  return (
    <div className="card">
      <div
        style={{
          padding: "20px",
          width: "200px",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <FaSignInAlt
            style={{ fontSize: "50px", marginLeft: "20px", color: "red" }}
          />
        </div>
        <div>
          <strong>Solution with amended answers</strong>
        </div>
      </div>
    </div>
  );
};

export default Card1;
