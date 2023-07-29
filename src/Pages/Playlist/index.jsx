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
    dispatch({ type: "ADD_PLAYLIST", payload: playlistData });
    closePlaylistModal();
  };

  console.log(state.playList);

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
        <form
          className="p-4 flex flex-col gap-6"
          onSubmit={handlePlaylistSubmit}
        >
          <div className="flex flex-col gap-3">
            <TextInputLabel labelText="Playlist Title">
              <TextInput
                inputName="playlistTitle"
                inputType="text"
                inputHandle={handlePlaylistData}
              />
            </TextInputLabel>
            <TextInputLabel labelText="Playlist Description">
              <TextInput
                inputName="playlistDescription"
                inputType="text"
                inputHandle={handlePlaylistData}
              />
            </TextInputLabel>
          </div>
          <div>
            <ContainedActionBtn>Create New Playlist</ContainedActionBtn>
          </div>
        </form>
      </ModalProvider>
    </PageContainer>
  );
};

export default Playlist;
