import { useContext, useRef } from "react";
import {
  Plus,
  Edit,
  Lightbulb,
  MessageSquare,
  Code,
  Send,
  Mic,
  Image,
  User,
  Cpu,
} from "lucide-react";
import { Context } from "../store/Context.jsx";

export default function MainLayout() {
  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    prevPrompt,
    setPrevPrompt,
  } = useContext(Context);
  const inputRef = useRef();

  const handleInput = () => {
    setInput(inputRef.current.value);
  };

  const handleOnSend = () => {
    setPrevPrompt([inputRef.current.value,...prevPrompt]);
    onSend();
    setInput("");
  };

  return (
    <div className={`flex-1 flex flex-col h-full bg-[#f5f7fa] ml-16 md:ml-20`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        <h1 className="text-xl font-semibold text-gray-800">SmartChat</h1>
        <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/api/placeholder/40/40"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex-grow overflow-auto p-4">
        {!showResult ? (
          <div className="flex flex-col items-center justify-center h-full px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 text-center">
              <span className="text-blue-600 font-medium">Hello,</span>{" "}
              <span className="text-rose-600 font-medium">User.</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 text-center mb-8 sm:mb-12">
              How can I help you today?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
              {[
                {
                  text: "Suggest beautiful places to see on an upcoming road trip",
                  icon: <Edit size={18} />
                },
                {
                  text: "Briefly summarize this concept: urban planning",
                  icon: <Lightbulb size={18} />
                },
                {
                  text: "Brainstorm team bonding activities for our work retreat",
                  icon: <MessageSquare size={18} />
                },
                {
                  text: "Improve the readability of the following code",
                  icon: <Code size={18} />
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white hover:bg-gray-50 rounded-xl p-4 cursor-pointer transition-colors border border-gray-200 shadow-sm"
                >
                  <p className="text-gray-700 mb-8 text-sm md:text-base">
                    {item.text}
                  </p>
                  <div className="flex justify-end text-gray-500">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="result px-2 sm:px-4 py-6 max-w-4xl mx-auto">
            <div className="result-title mb-6 flex items-start">
              <User className="h-9 w-9 rounded-full inline-block mr-3 mt-1 flex-shrink-0" />
              <p className="inline-block font-semibold text-gray-800 text-base sm:text-lg leading-snug">
                {recentPrompt}
              </p>
            </div>
            <div className="result-data bg-white flex items-start">
              <Cpu className="h-8 w-8 rounded-full inline-block mr-3 mt-1 flex-shrink-0" />
              {loading ? (
                <div className="loader w-full">
                  <hr className="h-3 rounded-full bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200" />
                  <hr className="h-3 rounded-full bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200" />
                  <hr className="h-3 rounded-full bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200" />
                </div>
              ) : (
                <p
                  className="inline-block whitespace-pre-wrap text-gray-700 font-normal text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: resultData.replace(
                      /\*\*(.*?)\*\*/g, 
                      '<strong class="text-gray-900 font-semibold">$1</strong>'
                    ) 
                  }}
                ></p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 pb-6 flex flex-col items-center mt-auto border-t border-gray-200 bg-white">
        <div className="bg-white border border-gray-300 hover:border-gray-400 rounded-full flex items-center px-4 py-3 w-full max-w-2xl transition-colors shadow-sm">
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <Plus size={20} />
          </button>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a prompt here"
            className="flex-grow px-4 py-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
            value={input}
            onChange={handleInput}
          />
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <Image size={20} />
            </button>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <Mic size={20} />
            </button>
            <button
              onClick={handleOnSend}
              className="p-1 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
        <div className="text-xs text-gray-500 text-center mt-3 max-w-2xl">
          SmartChat may display inaccurate info, including about people, so
          double-check its responses.
        </div>
      </div>
    </div>
  );
}