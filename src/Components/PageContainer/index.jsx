import React from "react";
import { Sidebar } from "../../Components";

const PageContainer = (props) => {
  const { className = "", children } = props;
  const classes = "min-h-screen mx-auto bg-[#fff] relative " + className;
  return (
    <div className={classes}>
      <div className="flex min-h-screen">
        <div className="basis-2/12 h-full">
          <Sidebar />
        </div>
        <div className="basis-10/12 h-full">{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
