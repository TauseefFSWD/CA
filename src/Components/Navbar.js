import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faWallet,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  custom-grey navbar-custom">
        <img src={process.env.PUBLIC_URL + "/5.png"} alt="My Image" />
        <div className="container ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <strong>CA Material</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <strong>Blogs</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <strong>Mentorship</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faWallet} /> Wallet
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Exit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
