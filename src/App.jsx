import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import "./App.css"
import MainLayout from "./components/Main/MainLayout";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainLayout/>
    </div>
  );
};

export default App;
