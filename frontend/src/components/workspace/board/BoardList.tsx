import React from "react";

const Board: React.FC = () => {
  return <div className="max-w-xs w-full h-40 rounded-md bg-black"></div>;
};
const BoardList = () => {
  return (
    <div className="flex flex-col">
      {/* Header title */}
      <span>Your Boards</span>
      <div className="flex gap-4 flex-wrap">
        <Board />
        <Board />
      </div>
    </div>
  );
};

export default BoardList;
