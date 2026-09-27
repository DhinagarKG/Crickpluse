import {
  createSlice,
} from "@reduxjs/toolkit";

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


const initialState = {

  teams: [

    {
      id: "india",
      name: "India",
      shortName: "IND",
      caption: "Men in Blue",
      captain: "Shubman Gill",
      odiWorldCups: 2,
      t20WorldCups: 2,
      logo: IND,
    },

    {
      id: "australia",
      name: "Australia",
      shortName: "AUS",
      caption: "Baggy Greens",
      captain: "Pat Cummins",
      odiWorldCups: 6,
      t20WorldCups: 1,
      logo: AUS,
    },

    {
      id: "new-zealand",
      name: "New Zealand",
      shortName: "NZ",
      caption: "Black Caps",
      captain: "Mitchell Santner",
      odiWorldCups: 0,
      t20WorldCups: 0,
      logo: NZ,
    },

    {
      id: "south-africa",
      name: "South Africa",
      shortName: "SA",
      caption: "Proteas",
      captain: "Temba Bavuma",
      odiWorldCups: 0,
      t20WorldCups: 0,
      logo: SA,
    },

    {
      id: "west-indies",
      name: "West Indies",
      shortName: "WI",
      caption: "The Windies",
      captain: "Roston Chase",
      odiWorldCups: 2,
      t20WorldCups: 2,
      logo: WI,
    },

    {
      id: "sri-lanka",
      name: "Sri Lanka",
      shortName: "SL",
      caption: "Lions",
      captain: "Charith Asalanka",
      odiWorldCups: 1,
      t20WorldCups: 0,
      logo: SL,
    },

    {
      id: "afghanistan",
      name: "Afghanistan",
      shortName: "AFG",
      caption: "Afghan Atalans",
      captain: "Rashid Khan",
      odiWorldCups: 0,
      t20WorldCups: 0,
      logo: AFG,
    },

    {
      id: "pakistan",
      name: "Pakistan",
      shortName: "PAK",
      caption: "Men in Green",
      captain: "Salman Ali Agha",
      odiWorldCups: 1,
      t20WorldCups: 1,
      logo: PAK,
    },

    {
      id: "england",
      name: "England",
      shortName: "ENG",
      caption: "Three Lions",
      captain: "Harry Brook",
      odiWorldCups: 1,
      t20WorldCups: 3,
      logo: ENG,
    },

    {
      id: "bangladesh",
      name: "Bangladesh",
      shortName: "BAN",
      caption: "Tigers",
      captain: "Najmul Hossain Shanto",
      odiWorldCups: 0,
      t20WorldCups: 0,
      logo: BAN,
    },

  ],

};


const teamSlice = createSlice({

  name: "teams",

  initialState,

  reducers: {

    addTeam: (state, action) => {

      state.teams.push(
        action.payload
      );

    },

    deleteTeam: (state, action) => {

      state.teams =
        state.teams.filter(
          (team) =>
            team.id !== action.payload
        );

    },

  },

});


export const {
  addTeam,
  deleteTeam,
} = teamSlice.actions;


export default teamSlice.reducer;