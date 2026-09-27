import React, { useState } from "react";

function Matches() {

  const [filter, setFilter] =
    useState("All");

  const matches = [

    {
      team1: "India",
      team2: "West Indies",
      date: "25 September 2026",
      venue: "Mumbai",
      format: "ODI",
      status: "Completed",
      result: "India won by 6 wickets",
    },

    {
      team1: "England",
      team2: "Pakistan",
      date: "27 September 2026",
      venue: "London",
      format: "T20",
      status: "Upcoming",
      result: "Match scheduled",
    },

    {
      team1: "South Africa",
      team2: "New Zealand",
      date: "29 September 2026",
      venue: "Cape Town",
      format: "ODI",
      status: "Upcoming",
      result: "Match scheduled",
    },

    {
      team1: "Sri Lanka",
      team2: "Bangladesh",
      date: "1 October 2026",
      venue: "Colombo",
      format: "T20",
      status: "Upcoming",
      result: "Match scheduled",
    },

    {
      team1: "Afghanistan",
      team2: "Australia ",
      date: "3 October 2026",
      venue: "Dubai",
      format: "T20",
      status: "Upcoming",
      result: "Match scheduled",
    },

  ];

  const filteredMatches =
    filter === "All"
      ? matches
      : matches.filter(
          (match) =>
            match.status === filter
        );

  return (
    <div className="page">

      <div className="page-header">

        <span>
          CRICKET MATCHES
        </span>

        <h1>
          Matches
        </h1>

        <p>
          View upcoming and completed cricket matches.
        </p>

      </div>


      <div className="format-tabs">

        <button
          className={
            filter === "All"
              ? "format-tab selected"
              : "format-tab"
          }
          onClick={() =>
            setFilter("All")
          }
        >
          All
        </button>

        <button
          className={
            filter === "Upcoming"
              ? "format-tab selected"
              : "format-tab"
          }
          onClick={() =>
            setFilter("Upcoming")
          }
        >
          Upcoming
        </button>

        <button
          className={
            filter === "Completed"
              ? "format-tab selected"
              : "format-tab"
          }
          onClick={() =>
            setFilter("Completed")
          }
        >
          Completed
        </button>

      </div>


      <div className="matches-list">

        {filteredMatches.map(
          (match, index) => (

            <div
              className="match-card"
              key={index}
            >

              <div className="match-format">
                {match.format}
              </div>

              <div className="match-teams">

                <h3>
                  {match.team1}
                </h3>

                <span>
                  VS
                </span>

                <h3>
                  {match.team2}
                </h3>

              </div>

              <div className="match-info">

                <p>
                  📅 {match.date}
                </p>

                <p>
                  📍 {match.venue}
                </p>

              </div>

              <div
                className={
                  match.status ===
                  "Completed"
                    ? "completed"
                    : "upcoming"
                }
              >
                {match.result}
              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default Matches;