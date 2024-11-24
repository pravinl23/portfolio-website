import React, { useEffect } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./App.css";

function App() {
  useEffect(() => {
    const fog = document.createElement("div");
    fog.classList.add("fog");
    document.body.appendChild(fog);

    const handleMouseMove = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      fog.style.left = `${x - 50}px`;
      fog.style.top = `${y - 50}px`;

      fog.style.transform = `scale(${Math.random() * 1.2 + 0.8})`; // Random scale for a more dynamic effect
      fog.style.opacity = Math.random() * 0.4 + 0.2; // Random opacity for variation
      fog.classList.add("cursor-active");

      setTimeout(() => {
        fog.classList.remove("cursor-active");
      }, 300);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
