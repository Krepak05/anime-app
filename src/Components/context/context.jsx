import React, { createContext, useEffect, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favouriteAnime, setFavouriteAnime] = useState(
    JSON.parse(localStorage.getItem("favouriteAnime")) || []
  );

  useEffect(() => {
    localStorage.setItem("favouriteAnime", JSON.stringify(favouriteAnime));
  }, [favouriteAnime]);

  const values = {
    favouriteAnime,
    setFavouriteAnime,
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export { appContext, AppContextProvider };
