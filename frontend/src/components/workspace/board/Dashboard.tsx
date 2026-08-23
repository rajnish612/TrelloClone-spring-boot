import React from "react";
import BoardList from "./BoardList";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col p-4 justify-start ">
      {/* HEADER */}
<div className="flex items-center px-4 mb-2 border-b border-gray-200">
  <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  </div>
  <div className="ml-3 flex flex-col">
    <span className="font-semibold text-gray-800">Trello Workspace</span>
    <span className="text-xs text-gray-500">Free</span>
  </div>
</div>
      {/* Board List */}
      <BoardList />
    </div>
  );
};

export default Dashboard;
