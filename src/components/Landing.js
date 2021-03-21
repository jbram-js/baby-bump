import React from "react";
import {Link} from "react-router-dom";
import landing from "../resources/landing.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faUsers,
  faHeart,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <img src={landing} className="landing-image" />
      <div className="landing-headings">
        <h1 className="landing-h1">Welcome to Bury Bump Buddies</h1>
        <h3 className="landing-h3">Your friend throughout pregnancy & birth</h3>
      </div>
      <div className="landing-cards">
        <div class="landing-card">
          <Link to="/about" className="landing-link">
            <div class="card-description">
              <FontAwesomeIcon icon={faInfoCircle} className="landing-icon" />
              <span class="landing-card-description-text">About us</span>
              <span class="landing-card-details">
                Click here to find out more about Bury Bump Buddies
              </span>
            </div>
          </Link>
        </div>
        <div class="landing-card">
          <Link to="/our-team" className="landing-link">
            <div class="card-description">
              <FontAwesomeIcon icon={faUsers} className="landing-icon" />
              <span class="landing-card-description-text">Meet the team</span>
              <span class="landing-card-details">
                Click here to meet the Bury Bump Buddies team
              </span>
            </div>
          </Link>
        </div>
        <div class="landing-card">
          <Link to="/little-box-of-hope" className="landing-link">
            <div class="card-description">
              <FontAwesomeIcon icon={faHeart} className="landing-icon" />
              <span class="landing-card-description-text">
                Little box of hope
              </span>
              <span class="landing-card-details">
                Click here to request a little box of hope from Bury Bump
                Buddies
              </span>
            </div>
          </Link>
        </div>
        <div class="landing-card">
          <Link to="/contact" className="landing-link">
            <div class="card-description">
              <FontAwesomeIcon icon={faLaptop} className="landing-icon" />
              <span class="landing-card-description-text">Contact us</span>
              <span class="landing-card-details">
                Click here to get in touch with Bury Bump Buddies
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
