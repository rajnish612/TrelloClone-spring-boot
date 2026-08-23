import React from "react";
import BoardList from "./BoardList";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col p-4 justify-start ">
      {/* HEADER */}
      <div className="flex px-2 border-b border-black justify-start items-center gap-x-2 w-full">
        {/* ICON */}
        <div className="h-10 aspect-square rounded-lg  w-fit bg-red-500"></div>
        <div className="flex flex-col">
          {" "}
          <span>Trello Workspace</span>
          <span>Free</span>
        </div>
      </div>
      {/* Board List */}
      <BoardList />
    </div>
  );
};

export default Dashboard;
