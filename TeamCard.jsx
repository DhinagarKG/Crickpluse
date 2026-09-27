import { Link } from "react-router-dom";

function TeamCard({ team }) {
  return (
    <div className="team-card">
      <div
        className="team-logo"
        style={{ backgroundColor: team.color }}
      >
        {team.shortName}
      </div>

      <h3>{team.name}</h3>

      <p className="caption">{team.caption}</p>

      <div className="team-info">
        <p>
          <strong>Captain:</strong> {team.captain}
        </p>

        <p>
          <strong>ODI World Cups:</strong> {team.odiWorldCups}
        </p>

        <p>
          <strong>T20 World Cups:</strong> {team.t20WorldCups}
        </p>
      </div>

      <Link
        to={`/teams/${team.id}`}
        className="view-button"
      >
        View Team
      </Link>
    </div>
  );
}

export default TeamCard;