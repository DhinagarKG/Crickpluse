import React from "react";

import {
  useSelector,
} from "react-redux";

import {
  Link,
} from "react-router-dom";

function Teams() {

  const teams = useSelector(
    (state) => state.teams.teams
  );

  return (

    <div className="page">

      <div className="page-header">

        <span>
          INTERNATIONAL CRICKET
        </span>

        <h1>
          Cricket Teams
        </h1>

        <p>
          Explore international cricket teams,
          captains and World Cup records.
        </p>

      </div>


      <div className="teams-grid">

        {teams.map((team) => (

          <div
            className="team-card"
            key={team.id}
          >

            {/* TEAM FLAG */}

            <div className="team-flag">

              <img
                src={team.logo}
                alt={team.name}
              />

            </div>


            {/* TEAM NAME */}

            <h3>
              {team.name}
            </h3>


            {/* SHORT NAME */}

            <p className="team-short-name">
              {team.shortName}
            </p>


            {/* CAPTION */}

            <p className="caption">
              {team.caption}
            </p>


            {/* TEAM INFORMATION */}

            <div className="team-info">

              <p>
                <strong>
                  Captain:
                </strong>{" "}
                {team.captain}
              </p>

              <p>
                <strong>
                  ODI World Cups:
                </strong>{" "}
                {team.odiWorldCups}
              </p>

              <p>
                <strong>
                  T20 World Cups:
                </strong>{" "}
                {team.t20WorldCups}
              </p>

            </div>


            {/* VIEW TEAM BUTTON */}

            <Link
              to={`/teams/${team.id}`}
              className="view-button"
            >
              View Team
            </Link>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Teams;