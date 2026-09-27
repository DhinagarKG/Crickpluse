import React, { useState, useEffect } from "react";

import IND from "../assets/IND.jpg";
import AUS from "../assets/AUS.jpg";
import NZ from "../assets/NZ.jpg";
import SA from "../assets/SA.jpg";
import WI from "../assets/WI.jpg";
import SL from "../assets/SL.jpg";
import AFG from "../assets/AFG.jpg";
import PAK from "../assets/PAK.jpg";
import ENG from "../assets/ENG.jpg";
import BAN from "../assets/BAN.jpg";

function LiveScore() {
  const [selectedMatch, setSelectedMatch] = useState(0);

  useEffect(() => {
    console.log("Live Score page loaded");
  }, []);

  const matches = [
    {
      team1: "IND",
      team2: "AUS",
      logo1: IND,
      logo2: AUS,
      score1: "215/6",
      score2: "240/8",
      overs1: "48.2 Overs",
      overs2: "50 Overs",
      status: "India batting",
      venue: "Mumbai",
    },

    {
      team1: "ENG",
      team2: "PAK",
      logo1: ENG,
      logo2: PAK,
      score1: "178/4",
      score2: "176/9",
      overs1: "20 Overs",
      overs2: "20 Overs",
      status: "England won",
      venue: "London",
    },

    {
      team1: "SA",
      team2: "NZ",
      logo1: SA,
      logo2: NZ,
      score1: "156/7",
      score2: "120/5",
      overs1: "18 Overs",
      overs2: "16 Overs",
      status: "South Africa batting",
      venue: "Cape Town",
    },

    {
      team1: "WI",
      team2: "SL",
      logo1: WI,
      logo2: SL,
      score1: "165/5",
      score2: "162/8",
      overs1: "20 Overs",
      overs2: "20 Overs",
      status: "West Indies batting",
      venue: "Barbados",
    },

    {
      team1: "AFG",
      team2: "BAN",
      logo1: AFG,
      logo2: BAN,
      score1: "145/6",
      score2: "140/9",
      overs1: "20 Overs",
      overs2: "20 Overs",
      status: "Afghanistan won",
      venue: "Dubai",
    },
  ];

  const match = matches[selectedMatch];

  return (
    <div className="page">

      <div className="page-header">
        <span>LIVE CRICKET</span>
        <h1>Live Scores</h1>
        <p>Follow cricket match score updates.</p>
      </div>

      <div className="live-match-main">

        <span className="live-badge">
          ● LIVE
        </span>

        <p className="venue">
          📍 {match.venue}
        </p>

        <div className="live-teams">

          <div>
            <div className="big-team-icon">
              <img
                src={match.logo1}
                alt={match.team1}
              />
            </div>

            <h2>{match.team1}</h2>

            <strong>{match.score1}</strong>

            <p>{match.overs1}</p>
          </div>

          <div className="vs">
            VS
          </div>

          <div>
            <div className="big-team-icon">
              <img
                src={match.logo2}
                alt={match.team2}
              />
            </div>

            <h2>{match.team2}</h2>

            <strong>{match.score2}</strong>

            <p>{match.overs2}</p>
          </div>

        </div>

        <h3 className="live-status">
          {match.status}
        </h3>

      </div>

      <h2 className="sub-heading">
        Other Matches
      </h2>

      <div className="score-grid">

        {matches.map((item, index) => (

          <button
            key={index}
            className={
              selectedMatch === index
                ? "score-card selected-score"
                : "score-card"
            }
            onClick={() => setSelectedMatch(index)}
          >

            <span className="live-badge">
              ● LIVE
            </span>

            <div className="small-team">
              <img
                src={item.logo1}
                alt={item.team1}
              />

              <h3>{item.team1}</h3>
            </div>

            <strong>
              {item.score1}
            </strong>

            <p>VS</p>

            <div className="small-team">
              <img
                src={item.logo2}
                alt={item.team2}
              />

              <h3>{item.team2}</h3>
            </div>

            <strong>
              {item.score2}
            </strong>

          </button>

        ))}

      </div>

    </div>
  );
}

export default LiveScore;