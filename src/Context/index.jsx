import { useReducer } from "react";
import { useContext } from "react";
import { useState, createContext } from "react";

import { categories, videos } from "../Data";

const DataContext = createContext();

const InitialState = {
  categoryList: [...categories],
  videoList: [...videos],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL": {
      return { ...state };
    }
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
