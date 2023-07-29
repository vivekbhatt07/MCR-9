import React, { useState } from "react";
import {
  IconActionBtn,
  ModalProvider,
  MoreCard,
  NoteForm,
  Sidebar,
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
import { useParams } from "react-router-dom";

const Detail = () => {
  const { state, dispatch } = useData();
  const { videoId } = useParams();
  const [isNoteOpen, setIsNote] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);

  const noteModalOpen = () => setIsNote(true);
  const noteModalClose = () => setIsNote(false);

  const noteEditOpen = () => setIsEditNote(true);
  const noteEditClose = () => setIsEditNote(false);

  const getVideoDetail = state.videoList.find((currentVideo) => {
    return currentVideo._id == videoId;
  });
  return (
    <div className="bg-stone-50">
      <div className="flex min-h-screen gap-2">
        <div className="basis-2/12 h-full">
          <Sidebar />
        </div>
        <div className="basis-10/12 pt-[2vh] flex gap-4 h-[98vh] overflow-y-scroll">
          <div className="basis-4/5 h-[98vh]">
            <div>
              <iframe
                width="853"
                height="480"
                src={getVideoDetail.src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div className="p-4 flex justify-between border-b-2 border-stone-400">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449309/Avatar/AvatarThree_mg1cgs.svg"
                    }
                    alt="dummy"
                  />
                </div>
                <span>{getVideoDetail.title}</span>
              </div>
              <div className="flex gap-2">
                <IconActionBtn>
                  <WatchLaterOutlined />
                </IconActionBtn>
                <IconActionBtn>
                  <PlaylistAdd />
                </IconActionBtn>
                <ModalProvider
                  modalTitle={"Add Note"}
                  isOpen={isNoteOpen}
                  closeModal={noteModalClose}
                  modalBtnVariant={
                    <IconActionBtn
                      handleClick={() => {
                        noteModalOpen();
                      }}
                    >
                      <EditNote />
                    </IconActionBtn>
                  }
                >
                  <div className="p-4">
                    <NoteForm
                      closeModal={noteModalClose}
                      videoCode={getVideoDetail._id}
                    />
                  </div>
                </ModalProvider>
              </div>
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <h3 className="text-2xl">My Notes</h3>
              <div className="flex flex-col gap-2">
                {state.noteList
                  .filter((current) => {
                    return current._id == getVideoDetail._id;
                  })
                  .map((currentNote) => {
                    return (
                      <div
                        key={currentNote._id}
                        className="flex justify-between items-center p-4 rounded-lg bg-stone-200"
                      >
                        <p>{currentNote.text}</p>
                        <div className="flex gap-2">
                          <ModalProvider
                            modalTitle={"Edit Note"}
                            isOpen={isEditNote}
                            closeModal={noteEditClose}
                            modalBtnVariant={
                              <IconActionBtn handleClick={noteEditOpen}>
                                <Edit isEdit />
                              </IconActionBtn>
                            }
                          >
                            <div className="p-4">
                              <NoteForm />
                            </div>
                          </ModalProvider>
                          <IconActionBtn
                            handleClick={() => {
                              dispatch({
                                type: "REMOVE_NOTE",
                                payload: currentNote._id,
                              });
                            }}
                          >
                            <Delete />
                          </IconActionBtn>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="basis-4/5 h-[98vh]">
            {/* <h3>More Videos:</h3> */}
            <div className="overflow-hidden h-[98vh] flex flex-col gap-3">
              {state.videoList.map((currentVideo) => {
                return <MoreCard key={currentVideo._id} {...currentVideo} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
