import React from "react";
import Player from "./Player";
import players from "../Data";

const PlayerList = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Players List</h2>
      <div className="row">
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
