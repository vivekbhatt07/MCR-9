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
  noteList: [],
  watchList: [],
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYLIST": {
      return {
        ...state,
        playList: [
          ...state.playList,
          {
            playListId: uuid(),
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

    case "ADD_NOTE": {
      return {
        ...state,
        noteList: [
          ...state.noteList,
          {
            _id: action.payload._id,
            text: action.payload.text,
            noteId: uuid(),
          },
        ],
      };
    }

    case "REMOVE_NOTE": {
      return {
        ...state,
        noteList: state.noteList.filter((currentNote) => {
          return currentNote.noteId !== action.payload;
        }),
      };
    }

    case "EDIT_NOTE": {
      return {
        ...state,
        noteList: state.noteList.map((currentNote) => {
          return currentNote.noteId === action.payload._id
            ? { ...currentNote, text: action.payload.text }
            : currentNote;
        }),
      };
    }

    case "ADD_TO_WATCH": {
      return {
        ...state,
        watchList: [...state.watchList, { watchId: uuid(), ...action.payload }],
      };
    }

    case "REMOVE_FROM_WATCH": {
      return {
        ...state,
        watchList: state.watchList.filter((current) => {
          return current._id !== action.payload;
        }),
      };
    }

    case "ADD_PLAYLIST_ITEM": {
      return {
        ...state,
        playList: state.playList.map((currentPlaylist) => {
          return;
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
