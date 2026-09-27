import React, {
  useRef,
  useState,
} from "react";

import {
  useSearchParams,
} from "react-router-dom";

import usePlayersApi from "../hooks/usePlayersApi";

import PlayerCard from "../components/PlayerCard";

// Player Images
import viratImage from "../assets/virat.jpg";
import rohitImage from "../assets/rohit.jpg";
import rashidKhanImage from "../assets/Rashid Khan.jpg";
import williamsonImage from "../assets/williamson.jpg";
import bumrahImage from "../assets/bumrah.jpg";
import smithImage from "../assets/smith.jpg";
import rootImage from "../assets/root.jpg";


function Players() {

  const [searchParams, setSearchParams] =
    useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const searchInput = useRef(null);

  const {
    players,
    loading,
  } = usePlayersApi();


  // Get image based on player name
  function getPlayerImage(playerName) {

    const name = playerName.toLowerCase();

    if (name.includes("virat")) {
      return viratImage;
    }

    if (name.includes("rohit")) {
      return rohitImage;
    }

    if (name.includes("rashid")) {
      return rashidKhanImage;
    }

    if (name.includes("williamson")) {
      return williamsonImage;
    }

    if (name.includes("bumrah")) {
      return bumrahImage;
    }

    if (name.includes("smith")) {
      return smithImage;
    }

    if (name.includes("root")) {
      return rootImage;
    }

    return "";
  }


  // Search player
  function handleSearch(event) {

    const value = event.target.value;

    setSearch(value);

    if (value.trim() === "") {

      setSearchParams({});

    } else {

      setSearchParams({
        search: value,
      });

    }
  }


  // Focus search box
  function focusSearch() {

    searchInput.current.focus();

  }


  // Filter players
  const filteredPlayers = players.filter(
    (player) => {

      const playerName =
        player.name ||
        player.strPlayer ||
        "";

      return playerName
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );
    }
  );


  return (

    <div className="page">

      {/* PAGE HEADER */}

      <div className="page-header">

        <span>
          CRICKET PLAYERS
        </span>

        <h1>
          Top International Players
        </h1>

        <p>
          Search and explore international cricket players.
        </p>

      </div>


      {/* SEARCH */}

      <div className="search-box">

        <input
          ref={searchInput}
          type="text"
          placeholder="Search player..."
          value={search}
          onChange={handleSearch}
        />

        <button
          className="primary-button"
          onClick={focusSearch}
        >
          Focus Search
        </button>

      </div>


      {/* LOADING */}

      {loading && (

        <div className="empty-message">

          Loading players...

        </div>

      )}


      {/* PLAYERS */}

      {!loading && (

        <div className="players-grid">

          {filteredPlayers.map(
            (player) => {

              const playerName =
                player.name ||
                player.strPlayer ||
                "Unknown Player";


              const country =
                player.country ||
                player.strNationality ||
                "International";


              const role =
                player.role ||
                player.strPosition ||
                "Cricket Player";


              const runs =
                player.runs ||
                "N/A";


              const wickets =
                player.wickets ||
                "N/A";


              return (

                <PlayerCard

                  key={
                    player.id ||
                    player.idPlayer ||
                    playerName
                  }

                  name={playerName}

                  country={country}

                  role={role}

                  runs={runs}

                  wickets={wickets}

                  image={
                    getPlayerImage(
                      playerName
                    )
                  }

                />

              );

            }
          )}

        </div>

      )}


      {/* NO PLAYERS */}

      {!loading &&
        filteredPlayers.length === 0 && (

          <div className="empty-message">

            No players found.

          </div>

        )}

    </div>

  );

}


export default Players;