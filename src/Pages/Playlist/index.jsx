import React, { useState } from "react";
import {
  ContainedActionBtn,
  IconActionBtn,
  ModalProvider,
  PageContainer,
  PlaylistCard,
  PlaylistForm,
  TextInput,
  TextInputLabel,
} from "../../Components";
import { useData } from "../../Context";
import {
  Home,
  Explore,
  PlaylistAdd,
  WatchLater,
  WatchLaterOutlined,
  EditNote,
  Close,
  AddCircleOutlineOutlined,
  Delete,
  Edit,
} from "@mui/icons-material";

const Playlist = () => {
  const { state, dispatch } = useData();

  return (
    <PageContainer label="Playlists">
      {state.playList.length !== 0 ? (
        state.playList.map((currentPlayList) => {
          return (
            <PlaylistCard key={currentPlayList._id} {...currentPlayList} />
          );
        })
      ) : (
        <div>ADD PLAYLIST</div>
      )}
      <PlaylistForm />
    </PageContainer>
  );
};

export default Playlist;
