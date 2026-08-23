import React from "react";
import LeftPanel from "./LeftPanel";
import Dashboard from "./board/Dashboard";

const WorkSpace = () => {
  return (
    <div className="flex min-h-screen w-full ">
      <LeftPanel />
      <Dashboard />
    </div>
  );
};

export default WorkSpace;
