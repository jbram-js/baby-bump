import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../resources/BBB-logo.svg";
import "../styles/NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showSidebar = () => setOpen(!open);
  const hideSidebar = () => setOpen(false);

  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Bury Bump Buddies Logo" />
          </Link>
        </div>
        <ul
          className="nav-link"
          style={{
            transform: open ? "translateX(0px)" : "",
          }}
        >
          <li className="nav-link-item">
            <Link to="/about" className="link" onClick={hideSidebar}>
              About us
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/our-team" className="link" onClick={hideSidebar}>
              Meet the team
            </Link>
          </li>
          <li className="nav-link-item">
            <Link
              to="/little-box-of-hope"
              className="link"
              onClick={hideSidebar}
            >
              Little box of hope
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/contact" className="link" onClick={hideSidebar}>
              Contact us
            </Link>
          </li>
        </ul>
        <i onClick={showSidebar} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
};

export default NavBar;
