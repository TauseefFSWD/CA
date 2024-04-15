import React from "react";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from Font Awesome icons

const Card = () => {
  return (
    <div className="card ">
      <div
        style={{
          padding: "20px",
          width: "250px",
        }}
      >
        <div style={{ marginTop: "10px", width: "10px" }}>
          <FaSearch
            style={{ fontSize: "50px", marginLeft: "20px", color: "red" }}
          />
        </div>
        <div>
          <strong>Modifiled as per NEW SCHEME</strong>
        </div>
      </div>
    </div>
  );
};

export default Card;
