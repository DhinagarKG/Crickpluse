import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="page">

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            WELCOME TO
          </span>

          <h1>
            CRICK<span>PLUSE</span>
          </h1>

          <p>
            Your complete destination for international
            cricket scores, teams, players, matches and
            tournaments.
          </p>

          <div className="hero-buttons">

            <Link
              to="/live-score"
              className="primary-button"
            >
              Live Scores
            </Link>

            <Link
              to="/teams"
              className="secondary-button"
            >
              Explore Teams
            </Link>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="section">

        <div className="section-title">

          <span>
            CRICKET WORLD
          </span>

          <h2>
            Everything in One Place
          </h2>

        </div>

        <div className="stats-grid">

          <div className="stat-box">
            <strong>10</strong>
            <span>
              International Teams
            </span>
          </div>

          <div className="stat-box">
            <strong>20+</strong>
            <span>
              Top Players
            </span>
          </div>

          <div className="stat-box">
            <strong>10+</strong>
            <span>
              Match Updates
            </span>
          </div>

          <div className="stat-box">
            <strong>2</strong>
            <span>
              Major Formats
            </span>
          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="feature-grid">

        <div className="feature-card">

          <div className="feature-icon">
            🏏
          </div>

          <h3>
            Teams
          </h3>

          <p>
            Explore international cricket teams,
            captains and World Cup records.
          </p>

          <Link to="/teams">
            View Teams →
          </Link>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            📊
          </div>

          <h3>
            Live Scores
          </h3>

          <p>
            Follow match scores and current
            cricket updates.
          </p>

          <Link to="/live-score">
            Live Score →
          </Link>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            👤
          </div>

          <h3>
            Players
          </h3>

          <p>
            Discover international cricket
            players and their statistics.
          </p>

          <Link to="/players">
            View Players →
          </Link>

        </div>

      </section>


      {/* HIGHLIGHT */}

      <section className="home-highlight">

        <div>

          <span>
            LIVE CRICKET
          </span>

          <h2>
            Follow Every Match
          </h2>

          <p>
            Check live scores, completed matches,
            players and tournament standings from
            one dashboard.
          </p>

        </div>

        <Link
          to="/live-score"
          className="primary-button"
        >
          Check Live Score
        </Link>

      </section>

    </div>
  );
}

export default Home;