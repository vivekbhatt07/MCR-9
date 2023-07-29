import React from "react";
import { useParams } from "react-router-dom";
import { Card, PageContainer } from "../../Components";
import { useData } from "../../Context";
import { simpleStr } from "../../Utility/simpleStr";

const CategoryList = () => {
  const { state, dispatch } = useData();
  const { categoryType } = useParams();

  const getCategoryVideoList = state.videoList.filter((currentVideo) => {
    return simpleStr(currentVideo.category) == categoryType;
  });

  return (
    <PageContainer label={categoryType}>
      {getCategoryVideoList.map((currentCategory) => {
        return <Card key={currentCategory._id} {...currentCategory} />;
      })}
    </PageContainer>
  );
};

export default CategoryList;
