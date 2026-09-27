import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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

function TeamDetails() {
  const { team } = useParams();
  const navigate = useNavigate();

  const teamData = {
    india: {
      name: "India",
      code: "IND",
      captain: "Rohit Sharma",
      coach: "Gautam Gambhir",
      odi: 2,
      t20: 2,
      logo: IND,
      players: [
        "Virat Kohli",
        "Rohit Sharma",
        "Jasprit Bumrah",
        "Suryakumar Yadav",
        "KL Rahul",
        "Varun Chakravarthy",
      ],
    },

    australia: {
      name: "Australia",
      code: "AUS",
      captain: "Pat Cummins",
      coach: "Andrew McDonald",
      odi: 6,
      t20: 1,
      logo: AUS,
      players: [
        "Steve Smith",
        "Pat Cummins",
        "Travis Head",
        "Tim David",
        "Cameron Green",
        "Josh Hazlewood",
      ],
    },

    "new-zealand": {
      name: "New Zealand",
      code: "NZ",
      captain: "Mitchell Santner",
      coach: "Gary Stead",
      odi: 0,
      t20: 0,
      logo: NZ,
      players: [
        "Kane Williamson",
        "Trent Boult",
        "Rachin Ravindra",
        "Daryl Mitchell",
      ],
    },

    "south-africa": {
      name: "South Africa",
      code: "SA",
      captain: "Temba Bavuma",
      coach: "Rob Walter",
      odi: 0,
      t20: 0,
      logo: SA,
      players: [
        "Kagiso Rabada",
        "Aiden Markram",
        "David Miller",
        "Heinrich Klaasen",
      ],
    },

    "west-indies": {
      name: "West Indies",
      code: "WI",
      captain: "Shai Hope",
      coach: "Daren Sammy",
      odi: 2,
      t20: 2,
      logo: WI,
      players: [
        "Nicholas Pooran",
        "Shai Hope",
        "Andre Russell",
        "Rovman Powell",
      ],
    },

    "sri-lanka": {
      name: "Sri Lanka",
      code: "SL",
      captain: "Charith Asalanka",
      coach: "Sanath Jayasuriya",
      odi: 1,
      t20: 1,
      logo: SL,
      players: [
        "Kusal Mendis",
        "Wanindu Hasaranga",
        "Pathum Nissanka",
        "Maheesh Theekshana",
      ],
    },

    afghanistan: {
      name: "Afghanistan",
      code: "AFG",
      captain: "Rashid Khan",
      coach: "Jonathan Trott",
      odi: 0,
      t20: 0,
      logo: AFG,
      players: [
        "Rashid Khan",
        "Mohammad Nabi",
        "Rahmanullah Gurbaz",
        "Fazalhaq Farooqi",
      ],
    },

    pakistan: {
      name: "Pakistan",
      code: "PAK",
      captain: "Babar Azam",
      coach: "Jason Gillespie",
      odi: 1,
      t20: 1,
      logo: PAK,
      players: [
        "Babar Azam",
        "Shaheen Afridi",
        "Mohammad Rizwan",
        "Naseem Shah",
      ],
    },

    england: {
      name: "England",
      code: "ENG",
      captain: "Jos Buttler",
      coach: "Brendon McCullum",
      odi: 1,
      t20: 2,
      logo: ENG,
      players: [
        "Joe Root",
        "Jos Buttler",
        "Ben Stokes",
        "Harry Brook",
      ],
    },

    bangladesh: {
      name: "Bangladesh",
      code: "BAN",
      captain: "Najmul Hossain Shanto",
      coach: "Phil Simmons",
      odi: 0,
      t20: 0,
      logo: BAN,
      players: [
        "Shakib Al Hasan",
        "Litton Das",
        "Mustafizur Rahman",
        "Taskin Ahmed",
      ],
    },
  };

  const data = teamData[team];

  if (!data) {
    return (
      <div className="team-details">
        <h2>Team Not Found</h2>

        <button
          className="back-btn"
          onClick={() => navigate("/teams")}
        >
          ← Back to Teams
        </button>
      </div>
    );
  }

  return (
    <div className="team-details">

      <button
        className="back-btn"
        onClick={() => navigate("/teams")}
      >
        ← Back to Teams
      </button>

      <div className="team-header">

        <img
          src={data.logo}
          alt={data.name}
        />

        <div>
          <p className="team-code">
            {data.code}
          </p>

          <h1>
            {data.name}
          </h1>

          <span>
            International Cricket Team
          </span>
        </div>

      </div>

      <div className="team-info">

        <div>
          <h3>Captain</h3>
          <p>{data.captain}</p>
        </div>

        <div>
          <h3>Coach</h3>
          <p>{data.coach}</p>
        </div>

        <div>
          <h3>ODI World Cup</h3>
          <p>{data.odi} Titles</p>
        </div>

        <div>
          <h3>T20 World Cup</h3>
          <p>{data.t20} Titles</p>
        </div>

      </div>

      <div className="players">

        <h2>
          Top Players
        </h2>

        <div className="player-list">

          {data.players.map((player) => (
            <div
              className="player-card"
              key={player}
            >
              🏏 {player}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default TeamDetails;