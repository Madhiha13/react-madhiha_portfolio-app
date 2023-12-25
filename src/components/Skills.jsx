
import React from "react";


const Skills = () => {
  const skills = ["HTML","CSS", "Javascript", "React","Java", "SQL"];

  return (
    <section id="Skills" className="skills-container">
      <h2>My Skills...</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
