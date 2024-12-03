import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Player = ({ name,team,nationality,jerseyNumber,age,image }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Team: {team} <br />
            Nationality: {nationality} <br />
            Jersey Number: {jerseyNumber} <br />
            Age: {age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;
