import { useState } from "react";
import {
  Plus,
  Edit,
  Lightbulb,
  MessageSquare,
  Code,
  Send,
  Mic,
  Image,
} from "lucide-react";

export default function MainLayout() {
  const [prompt, setPrompt] = useState("");
  
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };
  
  return (
    <div className="flex h-screen w-screen bg-white">
      <div className="flex-grow flex flex-col h-full">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-normal">SmartChat</h1>
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="/api/placeholder/40/40"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <h2 className="text-5xl font-light mb-4">
            <span className="text-blue-400 font-semibold">Hello,</span>{" "}
            <span className="text-rose-400 font-semibold">User.</span>
          </h2>
          <p className="text-4xl font-light text-gray-500">
            How can I help you today?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-16 w-full max-w-5xl px-4">
            <div className="bg-gray-100 rounded-lg p-6 cursor-pointer">
              <p className="text-gray-700 mb-16">
                Suggest beautiful places to see on an upcoming road trip
              </p>
              <div className="flex justify-end">
                <Edit size={18} />
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 cursor-pointer">
              <p className="text-gray-700 mb-16">
                Briefly summarize this concept: urban planning
              </p>
              <div className="flex justify-end">
                <Lightbulb size={18} />
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 cursor-pointer">
              <p className="text-gray-700 mb-16">
                Brainstorm team bonding activities for our work retreat
              </p>
              <div className="flex justify-end">
                <MessageSquare size={18} />
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 cursor-pointer">
              <p className="text-gray-700 mb-16">
                Improve the readability of the following code
              </p>
              <div className="flex justify-end">
                <Code size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 pb-6 flex flex-col items-center">
          <div className="bg-gray-100 rounded-full flex items-center px-4 py-3 w-full max-w-2xl mx-8">
            <button className="p-1 text-gray-500">
              <Plus size={20} />
            </button>
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="flex-grow px-4 py-1 bg-transparent outline-none overflow-scroll"
              value={prompt}
              onChange={handlePromptChange}
            />
            <button className="p-1 text-gray-500">
              <Image size={20} />
            </button>
            <button className="p-1 text-gray-500">
              <Mic size={20} />
            </button>
            <button className="p-1 text-gray-500">
              <Send size={20} />
            </button>
          </div>
          <div className="text-xs text-gray-500 text-center mt-2 max-w-2xl">
            SmartChat may display inaccurate info, including about people, so
            double-check its responses. Your privacy and SmartChat Apps
          </div>
        </div>
      </div>
    </div>
  );
}