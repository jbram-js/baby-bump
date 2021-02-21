import React from "react";
import {Link} from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <ul className="nav-link">
        <li className="nav-link-item">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/about" className="link">
            About us
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/our-team" className="link">
            Meet the team
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/little-box-of-hope" className="link">
            Little box of hope
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/contact" className="link">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
