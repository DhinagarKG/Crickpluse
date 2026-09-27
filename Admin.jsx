import React, {
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addTeam,
  deleteTeam,
} from "../store/teamSlice";

function Admin() {
  const dispatch = useDispatch();

  const teams = useSelector(
    (state) => state.teams.teams
  );

  const [name, setName] =
    useState("");

  const [shortName, setShortName] =
    useState("");

  const [captain, setCaptain] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      name.trim() === "" ||
      shortName.trim() === "" ||
      captain.trim() === ""
    ) {
      setError("Please fill all fields.");
      return;
    }

    const newTeam = {
      id: Date.now(),
      name: name,
      shortName: shortName.toUpperCase(),
      captain: captain,
      odiTitles: 0,
      t20Titles: 0,
    };

    dispatch(
      addTeam(newTeam)
    );

    setName("");
    setShortName("");
    setCaptain("");
    setError("");
  }

  function handleDelete(id) {
    dispatch(
      deleteTeam(id)
    );
  }

  return (
    <div className="page">

      <div className="page-header">

        <span>
          ADMIN PANEL
        </span>

        <h1>
          Team Management
        </h1>

        <p>
          Add and delete cricket teams using Redux.
        </p>

      </div>

      <div className="admin-card">

        <h2>
          Add New Team
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Team Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter team name"
            />

          </div>

          <div className="form-group">

            <label>
              Short Name
            </label>

            <input
              type="text"
              value={shortName}
              onChange={(event) =>
                setShortName(
                  event.target.value
                )
              }
              placeholder="Example: IND"
            />

          </div>

          <div className="form-group">

            <label>
              Captain
            </label>

            <input
              type="text"
              value={captain}
              onChange={(event) =>
                setCaptain(
                  event.target.value
                )
              }
              placeholder="Enter captain name"
            />

          </div>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-button"
          >
            Add Team
          </button>

        </form>

      </div>

      <div className="admin-card">

        <h2>
          Team List
        </h2>

        {teams.map((team) => (

          <div
            className="admin-player"
            key={team.id}
          >

            <div>

              <h3>
                {team.name}
              </h3>

              <p>
                {team.shortName} - Captain:{" "}
                {team.captain}
              </p>

            </div>

            <button
              className="delete-button"
              onClick={() =>
                handleDelete(team.id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Admin;