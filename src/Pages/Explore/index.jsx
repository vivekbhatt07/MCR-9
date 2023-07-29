import React from "react";
import { PageContainer } from "../../Components";
import { useData } from "../../Context";

const Explore = () => {
  const { state, dispatch } = useData();

  return (
    <PageContainer label="Explore" extra={<input />}>
      HelloWorld
    </PageContainer>
  );
};

export default Explore;
