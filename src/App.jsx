import React from "react";
import "./App.css";
import Progress from "./components/Progress";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
      
      <footer className="footer">
        <p>made with love by <a href="https://hillside.llc">Hillside Innovations</a></p>
      </footer>
    </div>
  );
}

export default App;