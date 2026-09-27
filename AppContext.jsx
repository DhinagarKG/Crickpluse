import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [favoriteTeam, setFavoriteTeam] = useState("India");

  return (
    <AppContext.Provider
      value={{
        favoriteTeam,
        setFavoriteTeam,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;