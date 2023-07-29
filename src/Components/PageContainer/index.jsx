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
      <div className="flex min-h-screen gap-2">
        <div className="basis-2/12 h-full">
          <Sidebar />
        </div>
        <div className="basis-10/12 h-full pt-[2vh] flex flex-col gap-7">
          <div className="flex flex-col gap-3 h-[16vh]">
            <h2 className="text-3xl capitalize">{label}</h2>
            {extra && extra}
          </div>
          <div className="overflow-y-scroll h-[78vh]" style={gridStyle}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
