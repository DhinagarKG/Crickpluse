import { useEffect, useState } from "react";
import axios from "axios";

function usePlayersApi() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultPlayers = [
    {
      id: 1,
      name: "Virat Kohli",
      country: "India",
      role: "Batsman",
      runs: "26,000+",
      wickets: "4",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      country: "India",
      role: "Batsman",
      runs: "19,000+",
      wickets: "12",
    },
    {
      id: 3,
      name: "Jasprit Bumrah",
      country: "India",
      role: "Bowler",
      runs: "400+",
      wickets: "400+",
    },
    {
      id: 4,
      name: "Steve Smith",
      country: "Australia",
      role: "Batsman",
      runs: "18,000+",
      wickets: "70",
    },
    {
      id: 5,
      name: "Joe Root",
      country: "England",
      role: "Batsman",
      runs: "19,000+",
      wickets: "80",
    },
    {
      id: 6,
      name: "Kane Williamson",
      country: "New Zealand",
      role: "Batsman",
      runs: "18,000+",
      wickets: "30",
    },
    {
      id: 7,
      name: "Babar Azam",
      country: "Pakistan",
      role: "Batsman",
      runs: "14,000+",
      wickets: "0",
    },
    {
      id: 8,
      name: "Rashid Khan",
      country: "Afghanistan",
      role: "Bowler",
      runs: "4,000+",
      wickets: "500+",
    },
  ];

  useEffect(() => {
    axios
      .get(
        "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=India"
      )
      .then((response) => {
        const apiPlayers = response.data.player;

        if (apiPlayers && apiPlayers.length > 0) {
          setPlayers(apiPlayers);
        } else {
          setPlayers(defaultPlayers);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log("API Error:", error);

        setPlayers(defaultPlayers);
        setLoading(false);
      });
  }, []);

  return {
    players,
    loading,
  };
}

export default usePlayersApi;