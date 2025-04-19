import { createContext, useState } from "react";
import Chat from "../config/config";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [resultData, setResultData] = useState("");

  const onSend = async () => {
    setLoading(true);
    setResultData("");
    setShowResult(true);
    setRecentPrompt(input);
    const response = await Chat(input);
    const formattedResponse = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    setLoading(false);
    setResultData(formattedResponse);
  };

  const contextValue = {
    input,
    setInput,
    prevPrompt,
    setPrevPrompt,
    onSend,
    recentPrompt,
    setRecentPrompt,
    resultData,
    setResultData,
    showResult,
    setShowResult,
    loading,
    setLoading,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default ContextProvider;