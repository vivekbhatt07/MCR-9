import React from "react";
import { Sidebar } from "../../Components";

const PageContainer = (props) => {
  const { className = "", children, label, extra } = props;
  const classes = "min-h-screen mx-auto bg-[#fff] relative" + className;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
    gap: "16px",
  };

  return (
    <div className={classes}>
      <div className="flex min-h-screen">
        <div className="basis-2/12 h-full">
          <Sidebar />
        </div>
        <div className="basis-10/12 h-full py-6 px-4 flex flex-col gap-7">
          <h2 className="text-3xl capitalize">{label}</h2>
          {extra && extra}
          <div className="" style={gridStyle}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
