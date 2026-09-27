import React, { useState } from "react";
import { Link } from "react-router-dom";

import virat from "../assets/virat.jpg";
import rohit from "../assets/rohit.jpg";
import rashid from "../assets/Rashid Khan.jpg";
import williamson from "../assets/williamson.jpg";
import bumrah from "../assets/bumrah.jpg";
import smith from "../assets/smith.jpg";
import root from "../assets/root.jpg";
import Gayle from "../assets/Gayle.jpg";

function Players() {

  const [search, setSearch] = useState("");

  const players = [
    {
      name: "Virat Kohli",
      country: "India",
      role: "Batsman",
      runs: "27,000+",
      wickets: "4",
      image: virat
    },

    {
      name: "Rohit Sharma",
      country: "India",
      role: "Batsman",
      runs: "19,000+",
      wickets: "8",
      image: rohit
    },

    {
      name: "Rashid Khan",
      country: "Afghanistan",
      role: "Bowler",
      runs: "3,000+",
      wickets: "700+",
      image: rashid
    },

    {
      name: "Kane Williamson",
      country: "New Zealand",
      role: "Batsman",
      runs: "19,000+",
      wickets: "29",
      image: williamson
    },

    {
      name: "Jasprit Bumrah",
      country: "India",
      role: "Bowler",
      runs: "500+",
      wickets: "400+",
      image: bumrah
    },

    {
      name: "Steve Smith",
      country: "Australia",
      role: "Batsman",
      runs: "20,000+",
      wickets: "40",
      image: smith
    },

    {
      name: "Joe Root",
      country: "England",
      role: "Batsman",
      runs: "20,000+",
      wickets: "80+",
      image: root
    },

    {
      name: "Chris Gayle",
      country: "West Indies",
      role: "Batsman",
      runs: "19,500+",
      wickets: "80+",
      image: Gayle
    }
  ];


  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div className="page">

      <div className="page-header">

        <span>
          CRICKET PLAYERS
        </span>

        <h1>
          Top International Players
        </h1>

        <p>
          Explore the world's top cricket players.
        </p>

      </div>


      <div className="search-box">

        <input
          type="text"
          placeholder="Search player..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      <div className="players-grid">

        {filteredPlayers.map((player) => (

          <div
            className="player-card"
            key={player.name}
          >

            <div className="player-image">

              <img
                src={player.image}
                alt={player.name}
              />

            </div>


            <h2>
              {player.name}
            </h2>


            <p>
              <strong>
                Country:
              </strong>{" "}
              {player.country}
            </p>


            <p>
              <strong>
                Role:
              </strong>{" "}
              {player.role}
            </p>


            <p>
              <strong>
                Runs:
              </strong>{" "}
              {player.runs}
            </p>


            <p>
              <strong>
                Wickets:
              </strong>{" "}
              {player.wickets}
            </p>

          </div>

        ))}

      </div>


      {filteredPlayers.length === 0 && (

        <div className="empty-message">

          No players found.

        </div>

      )}

    </div>

  );

}

export default Players;