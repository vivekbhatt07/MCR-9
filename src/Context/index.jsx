import { useReducer } from "react";
import { useContext } from "react";
import { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

import { categories, videos } from "../Data";

const DataContext = createContext();

const InitialState = {
  categoryList: [...categories],
  videoList: [...videos],
  playList: [],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYLIST": {
      return {
        ...state,
        playList: [
          ...state.playList,
          {
            _id: uuid(),
            thumbnail:
              "https://res.cloudinary.com/duqsyuriy/image/upload/v1688955652/vivekKBg_ykmcva.jpg",
            title: action.payload.playlistTitle,
            subTitle: action.payload.playlistDescription,
          },
        ],
      };
    }

    case "REMOVE_PLAYLIST": {
      return {
        ...state,
        playList: state.playList.filter((currentPlayList) => {
          return currentPlayList._id !== action.payload;
        }),
      };
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
