import React from "react";
import AboutMe from "./components/sections/AboutMe";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import "./App.css";

const RightPanel = () => {
  return (
    <div className="right-panel">
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
};

export default RightPanel;
