import React, { useState } from "react";

type Label = {
  text: string;
  color: string;
};

type CardType = {
  id: number;
  title: string;
  labels?: Label[];
  description?: boolean;
  comments?: number;
  attachments?: number;
  dueDate?: string;
  avatar?: string;
};

type ColumnType = {
  id: number;
  title: string;
  cards: CardType[];
};

const initialColumns: ColumnType[] = [
  {
    id: 1,
    title: "To Do",
    cards: [
      {
        id: 1,
        title: "Set up project repository and CI/CD pipeline",
        labels: [{ text: "DevOps", color: "bg-blue-500" }],
        description: true,
        comments: 3,
        dueDate: "Aug 30",
      },
      {
        id: 2,
        title: "Design system color palette and typography",
        labels: [
          { text: "Design", color: "bg-pink-500" },
          { text: "UI", color: "bg-purple-500" },
        ],
        attachments: 2,
        avatar: "R",
      },
      {
        id: 3,
        title: "Write API documentation",
        labels: [{ text: "Docs", color: "bg-yellow-500" }],
        comments: 1,
        dueDate: "Sep 5",
      },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    cards: [
      {
        id: 4,
        title: "Build authentication flow (login, signup, OAuth)",
        labels: [{ text: "Backend", color: "bg-green-500" }],
        description: true,
        comments: 7,
        avatar: "A",
        dueDate: "Aug 25",
      },
      {
        id: 5,
        title: "Create dashboard layout with responsive sidebar",
        labels: [
          { text: "Frontend", color: "bg-indigo-500" },
          { text: "UI", color: "bg-purple-500" },
        ],
        description: true,
        comments: 4,
        attachments: 1,
        avatar: "R",
      },
    ],
  },
  {
    id: 3,
    title: "In Review",
    cards: [
      {
        id: 6,
        title: "Implement board drag-and-drop",
        labels: [{ text: "Feature", color: "bg-orange-500" }],
        description: true,
        comments: 12,
        dueDate: "Aug 22",
        avatar: "K",
      },
    ],
  },
  {
    id: 4,
    title: "Done",
    cards: [
      {
        id: 7,
        title: "Project kickoff meeting notes",
        labels: [{ text: "Planning", color: "bg-teal-500" }],
        comments: 2,
      },
      {
        id: 8,
        title: "Set up Tailwind CSS and component library",
        labels: [{ text: "Frontend", color: "bg-indigo-500" }],
        description: true,
        avatar: "A",
      },
    ],
  },
];

const Card: React.FC<{ card: CardType }> = ({ card }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 cursor-pointer hover:shadow-md hover:border-indigo-300 transition-all duration-150 group">
      {card.labels && card.labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {card.labels.map((label, i) => (
            <span key={i} className={`${label.color} text-white text-[10px] font-semibold px-2 py-0.5 rounded-full`}>
              {label.text}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm text-gray-800 font-medium leading-snug mb-2">{card.title}</p>
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          {card.dueDate && (
            <span className="flex items-center gap-0.5 text-[11px] text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {card.dueDate}
            </span>
          )}
          {card.description && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          )}
          {card.comments && (
            <span className="flex items-center gap-0.5 text-[11px] text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {card.comments}
            </span>
          )}
          {card.attachments && (
            <span className="flex items-center gap-0.5 text-[11px] text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              {card.attachments}
            </span>
          )}
        </div>
        {card.avatar && (
          <div className="h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
            {card.avatar}
          </div>
        )}
      </div>
    </div>
  );
};

const AddCardForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-2 mt-1">
      <textarea
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a title for this card..."
        className="w-full rounded-lg border border-indigo-300 p-2 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
        rows={3}
      />
      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors font-medium">
          Add card
        </button>
        <button onClick={onClose} className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Column: React.FC<{ column: ColumnType }> = ({ column }) => {
  const [addingCard, setAddingCard] = useState(false);
  return (
    <div className="flex flex-col w-64 flex-shrink-0 bg-gray-100/80 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between px-3 pt-3 pb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-700">{column.title}</h3>
          <span className="text-xs text-gray-400 bg-gray-200 rounded-full px-1.5 py-0.5 font-medium">
            {column.cards.length}
          </span>
        </div>
        <button className="p-1 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2 overflow-y-auto max-h-[calc(100vh-220px)]">
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        {addingCard && <AddCardForm onClose={() => setAddingCard(false)} />}
      </div>
      {!addingCard && (
        <button
          onClick={() => setAddingCard(true)}
          className="flex items-center gap-1.5 mx-2 mb-2 mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add a card
        </button>
      )}
    </div>
  );
};

const AddListForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-2 w-64 flex-shrink-0 bg-gray-100/80 rounded-2xl p-3 shadow-sm">
      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter list title..."
        className="w-full rounded-lg border border-indigo-300 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
      />
      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors font-medium">
          Add list
        </button>
        <button onClick={onClose} className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Board: React.FC = () => {
  const [columns] = useState<ColumnType[]>(initialColumns);
  const [addingList, setAddingList] = useState(false);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #6d28d9 100%)" }}>
      {/* Board Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold text-white">Project Alpha</h1>
          <button className="text-white/60 hover:text-yellow-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
          <span className="text-white/40">|</span>
          <button className="flex items-center gap-1 text-sm text-white/80 bg-white/10 hover:bg-white/20 px-2 py-1 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Workspace
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[{ i: "R", c: "#6366f1" }, { i: "A", c: "#ec4899" }, { i: "K", c: "#10b981" }].map((m, idx) => (
              <div key={idx} className="h-7 w-7 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xs font-bold" style={{ background: m.c }}>
                {m.i}
              </div>
            ))}
          </div>
          <button className="flex items-center gap-1 text-sm text-white/80 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Invite
          </button>
          <button className="flex items-center gap-1 text-sm text-white/80 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
            Filter
          </button>
          <button className="text-sm text-white/80 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
            </svg>
          </button>
        </div>
      </div>

      {/* Columns */}
      <div className="flex items-start gap-4 px-6 py-4 overflow-x-auto flex-1">
        {columns.map((col) => (
          <Column key={col.id} column={col} />
        ))}
        {addingList ? (
          <AddListForm onClose={() => setAddingList(false)} />
        ) : (
          <button
            onClick={() => setAddingList(true)}
            className="flex items-center gap-2 w-64 flex-shrink-0 px-4 py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add another list
          </button>
        )}
      </div>
    </div>
  );
};

export default Board;
