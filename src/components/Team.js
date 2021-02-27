import React from "react";
import placeholder from "../resources/placeholder-person.jpg";
import "../styles/Team.css";

const Team = () => {
  return (
    <div className="team">
      <h1>Meet the team</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="meet-team">
        <div class="team-card">
          <img src={placeholder} className="card-image" />
          <div class="card-description">
            <span class="card-description-text">Name Surname</span>
          </div>
          <span class="card-details">A little info about my involvement</span>
        </div>
        <div class="team-card">
          <img src={placeholder} className="card-image" />
          <div class="card-description">
            <span class="card-description-text">Name Surname</span>
          </div>
          <span class="card-details">A little info about my involvement</span>
        </div>
        <div class="team-card">
          <img src={placeholder} className="card-image" />
          <div class="card-description">
            <span class="card-description-text">Name Surname</span>
          </div>
          <span class="card-details">A little info about my involvement</span>
        </div>
        <div class="team-card">
          <img src={placeholder} className="card-image" />
          <div class="card-description">
            <span class="card-description-text">Name Surname</span>
          </div>
          <span class="card-details">A little info about my involvement</span>
        </div>
        <div class="team-card">
          <img src={placeholder} className="card-image" />
          <div class="card-description">
            <span class="card-description-text">Name Surname</span>
          </div>
          <span class="card-details">A little info about my involvement</span>
        </div>
        <div class="team-card">
          <img src={placeholder} className="card-image" />
          <div class="card-description">
            <span class="card-description-text">Name Surname</span>
          </div>
          <span class="card-details">A little info about my involvement</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
