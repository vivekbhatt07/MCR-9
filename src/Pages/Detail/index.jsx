import React from "react";
import { PageContainer } from "../../Components";

import { useData } from "../../Context";

const Detail = () => {
  const { state, dispatch } = useData();
  return <PageContainer>Hello</PageContainer>;
};

export default Detail;
