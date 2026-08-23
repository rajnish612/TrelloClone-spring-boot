import React from "react";

type Item = {
  title?: string;
  item: string[];
};

const Items: Item[] = [
  {
    title: "Workspace",
    item: ["Home", "Boards", "Members"],
  },
  {
    title: "Your Boards",
    item: ["Project", "Marketing", "Development"],
  },
];
const LeftPanel = () => {
  return (
    <aside className="max-w-60  w-full bg-slate-50  py-1">
      {/* Header */}
      <div className="flex px-2 border-b border-black justify-start items-center gap-x-2 w-full">
        {/* ICON */}
        <div className="h-10 aspect-square rounded-lg  w-fit bg-red-500"></div>
        <div className="flex flex-col">
          {" "}
          <span>Trello Workspace</span>
          <span>Free</span>
        </div>
      </div>
      {/* Items */}
      <div className="flex flex-col px-2 py-2 gap-y-1">
        {Items.map((section, index) => (
          <div key={index} className="flex flex-col">
            {section.title && (
              <span className="text-xs font-semibold text-slate-500 px-2 py-1">
                {section.title}
              </span>
            )}

            {section.item.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="px-2 py-2 rounded-md hover:bg-slate-200 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LeftPanel;
