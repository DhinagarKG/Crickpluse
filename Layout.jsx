import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="main-container">
        <Outlet />
      </main>

      <footer className="footer">
        <h3>🏏 CrickPluse</h3>

        <p>
          Your complete destination for international cricket.
        </p>

        <p>
          © 2026 CrickPluse. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Layout;