import React from "react"
import "/Users/pravinlohani/pravin/src/index.css"

const RightPanel = () => {
  return (
    <div className="right-panel">
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Senior Front-End Engineer</h3>
          <p>Company Name | 2024 - Present</p>
          <p>Description of my role and achievements.</p>
        </div>
        <div className="experience-item">
          <h3>Lead Engineer</h3>
          <p>Company Name | 2018 - 2024</p>
          <p>Description of my role and achievements.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Project Title</h3>
          <p>Description of the project and technologies used.</p>
        </div>
      </section>
    </div>
  );
};

export default RightPanel;
