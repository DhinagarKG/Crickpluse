import React, { useState } from "react";

function Tournament() {
  const [format, setFormat] = useState("ODI");

  const odiTeams = [
    {
      position: 1,
      team: "India",
      played: 5,
      won: 4,
      lost: 1,
      points: 8,
    },
    {
      position: 2,
      team: "Australia",
      played: 5,
      won: 4,
      lost: 1,
      points: 8,
    },
    {
      position: 3,
      team: "England",
      played: 5,
      won: 3,
      lost: 2,
      points: 6,
    },
    {
      position: 4,
      team: "South Africa",
      played: 5,
      won: 2,
      lost: 3,
      points: 4,
    },
  ];

  const t20Teams = [
    {
      position: 1,
      team: "India",
      played: 5,
      won: 5,
      lost: 0,
      points: 10,
    },
    {
      position: 2,
      team: "England",
      played: 5,
      won: 4,
      lost: 1,
      points: 8,
    },
    {
      position: 3,
      team: "Australia",
      played: 5,
      won: 3,
      lost: 2,
      points: 6,
    },
    {
      position: 4,
      team: "Pakistan",
      played: 5,
      won: 2,
      lost: 3,
      points: 4,
    },
  ];

  const table = format === "ODI"
    ? odiTeams
    : t20Teams;

  return (
    <div className="page">

      <div className="page-header">

        <span>CRICKET TOURNAMENT</span>

        <h1>World Cup Points Table</h1>

        <p>
          Check team standings for ODI and T20 cricket.
        </p>

      </div>

      <div className="format-tabs">

        <button
          className={
            format === "ODI"
              ? "format-tab selected"
              : "format-tab"
          }
          onClick={() => setFormat("ODI")}
        >
          ODI
        </button>

        <button
          className={
            format === "T20"
              ? "format-tab selected"
              : "format-tab"
          }
          onClick={() => setFormat("T20")}
        >
          T20
        </button>

      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>

            {table.map((team) => (
              <tr key={team.position}>

                <td>{team.position}</td>

                <td>
                  <strong>{team.team}</strong>
                </td>

                <td>{team.played}</td>

                <td>{team.won}</td>

                <td>{team.lost}</td>

                <td>{team.points}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Tournament;