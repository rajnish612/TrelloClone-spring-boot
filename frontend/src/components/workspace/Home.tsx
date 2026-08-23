import React from "react";
import LeftPanel from "./LeftPanel";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full ">
      <LeftPanel />
      <Dashboard />
    </div>
  );
};

export default Home;
