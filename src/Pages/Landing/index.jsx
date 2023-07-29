import React from "react";
import { Card, PageContainer } from "../../Components";
import { useData } from "../../Context";

const Landing = () => {
  const { state, dispatch } = useData();

  return (
    <PageContainer label="Categories">
      {state.categoryList.map((currentCategory) => {
        return (
          <Card key={currentCategory._id} {...currentCategory} isCategory />
        );
      })}
    </PageContainer>
  );
};

export default Landing;
