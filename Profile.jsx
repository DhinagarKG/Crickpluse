import React, {
  useContext,
  useState,
} from "react";

import { AppContext } from "../context/AppContext";

function Profile() {

  const {
    favoriteTeam,
    setFavoriteTeam,
  } = useContext(AppContext);


  const [name, setName] =
    useState("CrickPluse User");

  const [email, setEmail] =
    useState("user@crickpluse.com");

  const [phone, setPhone] =
    useState("");

  const [dateOfBirth, setDateOfBirth] =
    useState("");

  const [city, setCity] =
    useState("");

  const [country, setCountry] =
    useState("India");

  const [bio, setBio] =
    useState("");

  const [message, setMessage] =
    useState("");


  function handleSubmit(event) {

    event.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === ""
    ) {

      setMessage(
        "Please fill all required fields."
      );

      return;
    }

    setMessage(
      "Profile updated successfully!"
    );
  }


  return (

    <div className="page">

      <div className="page-header">

        <span>
          USER PROFILE
        </span>

        <h1>
          My Profile
        </h1>

        <p>
          Manage your CrickPluse profile.
        </p>

      </div>


      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>


        <h2>
          {name}
        </h2>

        <p>
          {email}
        </p>


        <p>
          Favorite Team:{" "}

          <strong>
            {favoriteTeam}
          </strong>
        </p>


        <form onSubmit={handleSubmit}>

          {/* NAME */}

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(event) =>
                setName(event.target.value)
              }
            />

          </div>


          {/* EMAIL */}

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

          </div>


          {/* PHONE */}

          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              type="tel"
              value={phone}
              placeholder="Enter phone number"
              onChange={(event) =>
                setPhone(event.target.value)
              }
            />

          </div>


          {/* DATE OF BIRTH */}

          <div className="form-group">

            <label>
              Date of Birth
            </label>

            <input
              type="date"
              value={dateOfBirth}
              onChange={(event) =>
                setDateOfBirth(event.target.value)
              }
            />

          </div>


          {/* CITY */}

          <div className="form-group">

            <label>
              City
            </label>

            <input
              type="text"
              value={city}
              placeholder="Enter your city"
              onChange={(event) =>
                setCity(event.target.value)
              }
            />

          </div>


          {/* COUNTRY */}

          <div className="form-group">

            <label>
              Country
            </label>

            <select
              value={country}
              onChange={(event) =>
                setCountry(event.target.value)
              }
            >

              <option value="India">
                India
              </option>

              <option value="Australia">
                Australia
              </option>

              <option value="England">
                England
              </option>

              <option value="New Zealand">
                New Zealand
              </option>

              <option value="South Africa">
                South Africa
              </option>

              <option value="Sri Lanka">
                Sri Lanka
              </option>

              <option value="Pakistan">
                Pakistan
              </option>

              <option value="Bangladesh">
                Bangladesh
              </option>

              <option value="Afghanistan">
                Afghanistan
              </option>

            </select>

          </div>


          {/* FAVORITE TEAM */}

          <div className="form-group">

            <label>
              Favorite Team
            </label>

            <select
              value={favoriteTeam}
              onChange={(event) =>
                setFavoriteTeam(
                  event.target.value
                )
              }
            >

              <option value="India">
                India
              </option>

              <option value="Australia">
                Australia
              </option>

              <option value="England">
                England
              </option>

              <option value="New Zealand">
                New Zealand
              </option>

              <option value="South Africa">
                South Africa
              </option>

              <option value="West Indies">
                West Indies
              </option>

              <option value="Sri Lanka">
                Sri Lanka
              </option>

              <option value="Afghanistan">
                Afghanistan
              </option>

              <option value="Pakistan">
                Pakistan
              </option>

              <option value="Bangladesh">
                Bangladesh
              </option>

            </select>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="primary-button"
          >
            Update Profile
          </button>

        </form>


        {message && (

          <p className="success-message">
            {message}
          </p>

        )}

      </div>

    </div>

  );
}

export default Profile;