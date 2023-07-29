import React, { useState } from "react";
import {
  ContainedActionBtn,
  IconActionBtn,
  ModalProvider,
  PageContainer,
  PlaylistCard,
  TextInput,
  TextInputLabel,
} from "../../Components";

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
import { useData } from "../../Context";

const PlaylistForm = (props) => {
  const { state, dispatch } = useData();
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [playlistData, setPlaylistData] = useState({
    playlistTitle: "",
    playlistDescription: "",
  });

  const openPlaylistModal = () => setIsPlaylistOpen(true);
  const closePlaylistModal = () => setIsPlaylistOpen(false);

  const handlePlaylistData = (event) => {
    const { name, value } = event.target;
    setPlaylistData((prevPlaylistData) => {
      return { ...prevPlaylistData, [name]: value };
    });
  };

  const handlePlaylistSubmit = (event) => {
    event.preventDefault();
    if (props.isDetail) {
      dispatch({ type: "ADD_PLAYLIST_ITEM", payload: props.cardData });
    }
    dispatch({ type: "ADD_PLAYLIST", payload: playlistData });
    closePlaylistModal();
  };

  return (
    <ModalProvider
      modalTitle={"Add To Playlist"}
      isOpen={isPlaylistOpen}
      closeModal={closePlaylistModal}
      modalBtnVariant={
        <IconActionBtn handleClick={openPlaylistModal}>
          <AddCircleOutlineOutlined />
        </IconActionBtn>
      }
    >
      <form className="p-4 flex flex-col gap-6" onSubmit={handlePlaylistSubmit}>
        <div className="flex flex-col gap-3">
          <TextInputLabel labelText="Playlist Title">
            <TextInput
              inputName="playlistTitle"
              inputType="text"
              inputHandle={handlePlaylistData}
              inputValue={playlistData.playlistTitle}
              inputPlaceholder="Enter title of your playlist"
            />
          </TextInputLabel>
          <TextInputLabel labelText="Playlist Description">
            <TextInput
              inputName="playlistDescription"
              inputType="text"
              inputHandle={handlePlaylistData}
              inputValue={playlistData.playlistDescription}
              inputPlaceholder="Write a description"
            />
          </TextInputLabel>
        </div>
        <div className="flex gap-2 justify-between">
          {!props.isDetail && (
            <ContainedActionBtn>Create New Playlist</ContainedActionBtn>
          )}
          {props.isDetail && (
            <ContainedActionBtn>Add Video to new playlist</ContainedActionBtn>
          )}
          {props.isDetail && (
            <ContainedActionBtn>Add to Existing</ContainedActionBtn>
          )}
        </div>
      </form>
    </ModalProvider>
  );
};

export default PlaylistForm;
