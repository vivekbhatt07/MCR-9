import React from "react";
import { PageContainer, Card } from "../../Components";
import { useData } from "../../Context";

const WatchLater = () => {
  const { state, dispatch } = useData();

  return (
    <PageContainer label="Watch Later">
      {state.watchList.length == 0 ? (
        <div>NO VIDEOS</div>
      ) : (
        state.watchList.map((currentWatchItem) => {
          return <Card key={currentWatchItem._id} {...currentWatchItem} />;
        })
      )}
    </PageContainer>
  );
};

export default WatchLater;
