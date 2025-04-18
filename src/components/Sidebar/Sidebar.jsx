import { useState } from "react";
import { HelpCircle, Clock, Settings, Plus, Menu } from "lucide-react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`bg-gray-100 flex flex-col h-full transition-all duration-300 ${
          isExpanded ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <button
            className="text-gray-700 focus:outline-none cursor-pointer"
            onClick={toggleSidebar}
          >
            <Menu size={20} />
          </button>
        </div>
        <button className="mx-4 my-4 bg-gray-200 rounded-lg p-2 flex items-center justify-center">
          <Plus size={20} />
          {isExpanded && <span className="ml-2">New Chat</span>}
        </button>
        {isExpanded ? (
          <div className="px-4 py-2 text-gray-500">
            Recent
            <p>What is React</p>
          </div>
        ) : (
          <div className="h-8"></div>
        )}
        <div className="flex-grow"></div>
        <div className="mb-8">
          <div className="px-4 py-3 flex items-center text-gray-700 hover:bg-gray-200 cursor-pointer">
            <HelpCircle size={20} />
            {isExpanded && <span className="ml-2">Help</span>}
          </div>
          <div className="px-4 py-3 flex items-center text-gray-700 hover:bg-gray-200 cursor-pointer">
            <Clock size={20} />
            {isExpanded && <span className="ml-2">Activity</span>}
          </div>
          <div className="px-4 py-3 flex items-center text-gray-700 hover:bg-gray-200 cursor-pointer">
            <Settings size={20} />
            {isExpanded && <span className="ml-2">Settings</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
