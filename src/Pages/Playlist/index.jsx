import React from "react";
import { PageContainer } from "../../Components";
import { useData } from "../../Context";

const Playlist = () => {
  const { state, dispatch } = useData();

  return <PageContainer label="Playlists">HelloWorld</PageContainer>;
};

export default Playlist;
