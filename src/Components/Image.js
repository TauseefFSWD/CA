import React from "react";

export default function Image() {
  return (
    <div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/home1.png"}
          alt="My Image"
          className="dam"
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/home2.png"}
          alt="My Image"
          className="dam"
        />
      </div>
      <h2 className="why">Why get this ICAI material from Vivitsu ?</h2>
      <strong className="why">
        <p className="why">
          Why our material is considered as a value addition to ICAI notes? How
          are we different from Tutions materials
        </p>
      </strong>
    </div>
  );
}
