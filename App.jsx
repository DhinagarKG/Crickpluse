import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import AppProvider from "./context/AppContext";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import LiveScore from "./pages/LiveScore";
import Players from "./pages/Players";
import Matches from "./pages/Matches";
import Tournament from "./pages/Tournament";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

function App() {
  return (
    <AppProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route path="/teams">

            <Route
              index
              element={<Teams />}
            />

            <Route
              path="/teams/:team"
              element={<TeamDetails />}
              />

          </Route>

          <Route
            path="/live-score"
            element={<LiveScore />}
          />

          <Route
            path="/players"
            element={<Players />}
          />

          <Route
            path="/matches"
            element={<Matches />}
          />

          <Route
            path="/tournament"
            element={<Tournament />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={
              <div className="page not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                  The page you are looking for does not exist.
                </p>
              </div>
            }
          />

        </Routes>

      </BrowserRouter>

    </AppProvider>
  );
}

export default App;