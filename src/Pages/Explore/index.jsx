import React, { useState } from "react";
import { Card, PageContainer } from "../../Components";
import { useData } from "../../Context";
import { simpleStr } from "../../Utility/simpleStr";

const Explore = () => {
  const { state, dispatch } = useData();

  const [searchText, setSearchText] = useState("");

  const searchList = state.videoList.filter((currentVideo) => {
    return simpleStr(currentVideo.title).includes(simpleStr(searchText));
  });

  return (
    <PageContainer
      label="Explore"
      extra={
        <input
          className="outline-stone-500 w-[350px] px-3 py-2 rounded-md font-light bg-stone-200"
          placeholder="Search Video By Title"
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      }
    >
      {searchList.length !== 0 ? (
        searchList.map((currentVideo) => {
          return <Card key={currentVideo._id} {...currentVideo} />;
        })
      ) : (
        <div>No Data Found With "{searchText}"</div>
      )}
    </PageContainer>
  );
};

export default Explore;
