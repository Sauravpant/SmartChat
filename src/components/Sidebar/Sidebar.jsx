import { useContext, useState } from "react";
import { HelpCircle, Clock, Settings, Plus, Menu } from "lucide-react";
import { Context } from "../store/Context";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { prevPrompt } = useContext(Context);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed md:relative z-10 h-full ${
        isExpanded ? "w-64" : "w-16 md:w-20"
      } transition-all duration-300 ease-in-out`}
    >
      <div className={`bg-[#1e293b] flex flex-col h-full shadow-lg`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <button
            className="text-gray-300 hover:text-white focus:outline-none cursor-pointer"
            onClick={toggleSidebar}
          >
            <Menu size={20} />
          </button>
        </div>

        <button className="mx-3 my-4 bg-[#334155] hover:bg-[#475569] rounded-lg p-2 flex items-center justify-center transition-colors">
          <Plus size={20} className="min-w-[20px]" />
          {isExpanded && (
            <span className="ml-2 text-sm font-medium text-gray-200">
              New Chat
            </span>
          )}
        </button>

        {isExpanded ? (
          <div className="px-3 py-2 border-b border-gray-700 overflow-y-auto">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
              Recent
            </h3>
            {prevPrompt.length > 0 ? (
              <div className="space-y-1">
                {prevPrompt.map((prompt, index) => (
                  <p
                    key={index}
                    className="text-sm font-normal text-gray-300 truncate py-1 px-2 hover:bg-[#334155] rounded transition-colors"
                  >
                    {prompt}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-1 italic px-2">
                No recent prompts yet
              </p>
            )}
          </div>
        ) : null}

        <div className="flex-grow"></div>

        <div className="mb-4 space-y-1 px-2">
          <div className="px-2 py-2 flex items-center text-gray-300 hover:bg-[#334155] hover:text-white cursor-pointer rounded transition-colors">
            <HelpCircle size={18} className="min-w-[18px]" />
            {isExpanded && (
              <span className="ml-3 text-sm font-medium">Help</span>
            )}
          </div>
          <div className="px-2 py-2 flex items-center text-gray-300 hover:bg-[#334155] hover:text-white cursor-pointer rounded transition-colors">
            <Clock size={18} className="min-w-[18px]" />
            {isExpanded && (
              <span className="ml-3 text-sm font-medium">Activity</span>
            )}
          </div>
          <div className="px-2 py-2 flex items-center text-gray-300 hover:bg-[#334155] hover:text-white cursor-pointer rounded transition-colors">
            <Settings size={18} className="min-w-[18px]" />
            {isExpanded && (
              <span className="ml-3 text-sm font-medium">Settings</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
