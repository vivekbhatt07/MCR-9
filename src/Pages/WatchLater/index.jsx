import React from "react";
import { PageContainer } from "../../Components";
import { useData } from "../../Context";

const WatchLater = () => {
  const { state, dispatch } = useData();

  return <PageContainer>HelloWorld</PageContainer>;
};

export default WatchLater;
